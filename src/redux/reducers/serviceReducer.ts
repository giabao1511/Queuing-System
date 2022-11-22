import * as types from "../actionTypes";
const initialState = {
  loading: false,
  error: null,
  allServices: null,
  detailService: null,
};

const deviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_SERVICES_START:
    case types.GET_ALL_SERVICES_START:
    case types.GET_DETAIL_SERVICE_START:
    case types.UPDATE_SERVICE_START:
      return {
        ...state,
        loading: true,
      };

    case types.CREATE_SERVICES_SUCCESS:
    case types.UPDATE_SERVICE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.GET_ALL_SERVICES_SUCCESS: {
      return {
        ...state,
        loading: false,
        allServices: action.payload,
      };
    }

    case types.GET_DETAIL_SERVICE_SUCCESS: {
      return {
        ...state,
        loading: false,
        detailService: action.payload,
      };
    }

    case types.CREATE_SERVICES_FAIL:
    case types.GET_ALL_SERVICES_FAIL:
    case types.GET_DETAIL_SERVICE_FAIL:
    case types.UPDATE_SERVICE_FAIL: {
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
