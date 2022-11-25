import * as types from "../actionTypes";
const initialState = {
  loading: false,
  error: null,
  allProvide: null,
  detailProvide: null,
};

const deviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_PROVIDE_START:
    case types.GET_ALL_PROVIDE_START:
    case types.GET_DETAIL_PROVIDE_START:
      return {
        ...state,
        loading: true,
      };

    case types.CREATE_PROVIDE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.GET_ALL_PROVIDE_SUCCESS: {
      return {
        ...state,
        loading: false,
        allProvide: action.payload,
      };
    }

    case types.GET_DETAIL_PROVIDE_SUCCESS: {
      return {
        ...state,
        loading: false,
        detailProvide: action.payload,
      };
    }

    case types.CREATE_PROVIDE_FAIL:
    case types.GET_ALL_PROVIDE_FAIL:
    case types.GET_DETAIL_PROVIDE_FAIL: {
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
