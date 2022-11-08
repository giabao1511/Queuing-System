import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase/db";
import * as types from "../actionTypes";
import { IDevice } from "../interface";

export const getAllDeviceStart = () => ({
  type: types.GET_ALL_DEVICES_START,
});

export const getAllDeviceSuccess = (data?: any) => ({
  type: types.GET_ALL_DEVICES_SUCCESS,
  payload: data,
});

export const getAllDeviceFail = (error?: any) => ({
  type: types.GET_ALL_DEVICES_FAIL,
  payload: error,
});

export const createDeviceStart = () => ({
  type: types.CREATE_DEVICES_START,
});

export const createDeviceSuccess = (data?: any) => ({
  type: types.CREATE_DEVICES_SUCCESS,
  payload: data,
});

export const createDeviceFail = (error?: any) => ({
  type: types.CREATE_DEVICES_FAIL,
  payload: error,
});

export const getDetailDeviceStart = () => ({
  type: types.GET_DETAIL_DEVICE_START,
});

export const getDetailDeviceSuccess = (data?: any) => ({
  type: types.GET_DETAIL_DEVICE_SUCCESS,
  payload: data,
});

export const getDetailDeviceFail = (error?: any) => ({
  type: types.GET_DETAIL_DEVICE_FAIL,
  payload: error,
});

export const getDetailDeviceInitiate =
  (id: any) => async (dispatch: any) => {
    try {
      dispatch(getDetailDeviceStart());

      const docRef = doc(db, "devices", id);

      onSnapshot(docRef, (snapshot) => {
        let device: any = {};
        device = snapshot.data();
        dispatch(getDetailDeviceSuccess({ ...device, id }));
      });
    } catch (error) {
      dispatch(getDetailDeviceFail(error));
    }
  };

export const getAllDeviceInitiate = () => async (dispatch: any) => {
  try {
    dispatch(getAllDeviceStart());

    const colRef = collection(db, "devices");
    onSnapshot(colRef, (snapshot) => {
      let devices: any[] = [];
      snapshot.docs.forEach((doc) => {
        devices.push({ ...doc.data(), id: doc.id });
      });

      dispatch(getAllDeviceSuccess(devices));
    });
  } catch (error) {
    dispatch(getAllDeviceFail(error));
  }
};

export const createDeviceInitiate =
  ({ deviceID, type, name, username, IPAddress, password, service }: IDevice) =>
  async (dispatch: any) => {
    try {
      dispatch(createDeviceStart());

      const colRef = collection(db, "devices");

      addDoc(colRef, {
        deviceID,
        type,
        name,
        username,
        IPAddress,
        password,
        service,
      });

      dispatch(createDeviceSuccess({ message: "Success" }));
    } catch (error) {
      dispatch(createDeviceFail(error));
    }
  };
