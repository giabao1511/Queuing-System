import {
    addDoc,
    collection,
    doc,
    onSnapshot
} from "firebase/firestore";
import { db } from "../../firebase/config";
import * as types from "../actionTypes";
import { IService } from "../interface";

export const getAllProvideStart = () => ({
  type: types.GET_ALL_PROVIDE_START,
});

export const getAllProvideSuccess = (data?: any) => ({
  type: types.GET_ALL_PROVIDE_SUCCESS,
  payload: data,
});

export const getAllProvideFail = (error?: any) => ({
  type: types.GET_ALL_PROVIDE_FAIL,
  payload: error,
});

export const createProvideStart = () => ({
  type: types.CREATE_PROVIDE_START,
});

export const createProvideSuccess = (data?: any) => ({
  type: types.CREATE_PROVIDE_SUCCESS,
  payload: data,
});

export const createProvideFail = (error?: any) => ({
  type: types.CREATE_PROVIDE_FAIL,
  payload: error,
});

export const getDetailProvideStart = () => ({
  type: types.GET_DETAIL_PROVIDE_START,
});

export const getDetailProvideSuccess = (data?: any) => ({
  type: types.GET_DETAIL_PROVIDE_SUCCESS,
  payload: data,
});

export const getDetailProvideFail = (error?: any) => ({
  type: types.GET_DETAIL_PROVIDE_FAIL,
  payload: error,
});

export const getDetailProvideInitiate = (id: any) => async (dispatch: any) => {
  try {
    dispatch(getDetailProvideStart());

    const docRef = doc(db, "provide", id);
    let provide: any = {};

    onSnapshot(docRef, (snapshot) => {
      provide = snapshot.data();
      dispatch(getDetailProvideSuccess({ ...provide, id }));
    });
  } catch (error) {
    dispatch(getDetailProvideFail(error));
  }
};

export const getAllProvideInitiate = () => async (dispatch: any) => {
  try {
    dispatch(getAllProvideStart());

    const colRef = collection(db, "provide");
    console.log(colRef, "ref");

    onSnapshot(colRef, (snapshot) => {
      let provide: any[] = [];
      snapshot.docs.forEach((doc) => {
        provide.push({ ...doc.data(), id: doc.id });
      });

      dispatch(getAllProvideSuccess(provide));
    });
  } catch (error) {}
};

export const createProvideInitiate =
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
      dispatch(createProvideStart());

      const colRef = collection(db, "provide");

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
        dispatch(createProvideSuccess({ message: "Success" }));
      });
    } catch (error) {
      dispatch(createProvideFail(error));
    }
  };
