import * as types from "../actionTypes";
const initialState = {
  loading: false,
  error: null,
  allDevices: null,
};

const deviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_DEVICES_START:
    case types.GET_ALL_DEVICES_START:
      return {
        ...state,
        loading: true,
      };

    case types.CREATE_DEVICES_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.GET_ALL_DEVICES_SUCCESS: {
      return {
        ...state,
        loading: false,
        allDevices: action.payload,
      };
    }

    case types.CREATE_DEVICES_FAIL:
    case types.GET_ALL_DEVICES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default deviceReducer;
