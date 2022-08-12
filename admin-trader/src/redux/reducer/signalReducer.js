import * as types from "../actions/actionTypes";
const initialState = {
  user: null,
  data: null,
  loading: false,
  error: null,
};

const signalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNAL_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.SIGNAL_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
      };
    default:
      return state;
  }
};

export default signalReducer;
