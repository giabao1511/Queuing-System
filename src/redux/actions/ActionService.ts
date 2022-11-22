import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import * as types from "../actionTypes";
import { IService } from "../interface";

export const getAllServiceStart = () => ({
  type: types.GET_ALL_SERVICES_START,
});

export const getAllServiceSuccess = (data?: any) => ({
  type: types.GET_ALL_SERVICES_SUCCESS,
  payload: data,
});

export const getAllServiceFail = (error?: any) => ({
  type: types.GET_ALL_SERVICES_FAIL,
  payload: error,
});

export const createServiceStart = () => ({
  type: types.CREATE_SERVICES_START,
});

export const createServiceSuccess = (data?: any) => ({
  type: types.CREATE_SERVICES_SUCCESS,
  payload: data,
});

export const createServiceFail = (error?: any) => ({
  type: types.CREATE_SERVICES_FAIL,
  payload: error,
});

export const getDetailServiceStart = () => ({
  type: types.GET_DETAIL_SERVICE_START,
});

export const getDetailServiceSuccess = (data?: any) => ({
  type: types.GET_DETAIL_SERVICE_SUCCESS,
  payload: data,
});

export const getDetailServiceFail = (error?: any) => ({
  type: types.GET_DETAIL_SERVICE_FAIL,
  payload: error,
});

export const updateServiceStart = () => ({
  type: types.UPDATE_SERVICE_START,
});

export const updateServiceSuccess = (data?: any) => ({
  type: types.UPDATE_SERVICE_SUCCESS,
  payload: data,
});

export const updateServiceFail = (error?: any) => ({
  type: types.UPDATE_SERVICE_FAIL,
  payload: error,
});

export const getDetailServiceInitiate = (id: any) => async (dispatch: any) => {
  try {
    dispatch(getDetailServiceStart());

    const docRef = doc(db, "services", id);
    let service: any = {};

    onSnapshot(docRef, (snapshot) => {
      service = snapshot.data();
      dispatch(getDetailServiceSuccess({ ...service, id }));
    });
  } catch (error) {
    dispatch(getDetailServiceFail(error));
  }
};

export const getAllServiceInitiate = () => async (dispatch: any) => {
  try {
    dispatch(getAllServiceStart());

    const colRef = collection(db, "services");
    console.log(colRef, "ref");

    onSnapshot(colRef, (snapshot) => {
      let service: any[] = [];
      snapshot.docs.forEach((doc) => {
        service.push({ ...doc.data(), id: doc.id });
      });

      dispatch(getAllServiceSuccess(service));
    });
  } catch (error) {}
};

export const createServiceInitiate =
  ({
    serviceID,
    description,
    name,
    max,
    min,
    prefix,
    surfix,
    isReset,
  }: IService) =>
  async (dispatch: any) => {
    try {
      dispatch(createServiceStart());

      const colRef = collection(db, "services");

      addDoc(colRef, {
        serviceID,
        description,
        name,
        max,
        min,
        prefix,
        surfix,
        isReset,
      }).then(() => {
        dispatch(createServiceSuccess({ message: "Success" }));
      });
    } catch (error) {
      dispatch(createServiceFail(error));
    }
  };

export const updateServiceInitiate =
  ({
    id,
    serviceID,
    description,
    name,
    max,
    min,
    prefix,
    surfix,
    isReset,
  }: IService) =>
  async (dispatch: any) => {
    try {
      dispatch(updateServiceStart());

      const docRef = doc(db, "services", id);

      updateDoc(docRef, {
        serviceID,
        description,
        name,
        max,
        min,
        prefix,
        surfix,
        isReset,
      }).then(() => {
        dispatch(updateServiceSuccess({ message: "success" }));
      });
    } catch (error) {
      dispatch(updateServiceFail(error));
    }
  };
