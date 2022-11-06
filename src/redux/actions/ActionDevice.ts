import { collection } from "firebase/firestore";
import db from "src/firebase/db";
import * as types from "../actionTypes";

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

export const getAllDeviceInitiate = () => async (dispatch: any) => {
  try {
    dispatch(getAllDeviceStart());

    const colRef = collection(db, "devices");
  } catch (error) {
    dispatch(getAllDeviceFail(error));
  }
};
