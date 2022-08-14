import * as types from "../actions/actionTypes";
const initialState = {
  user: null,
  data: [],
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

    case types.SIGNAL_UPDATE:
      for (let index = 0; index < state.data.length; index++) {
          const el = state.data[index];
          if (el.id === action.payload.id){
              state.data[index] = action.payload
              break
          }   
      }
      return {
        loading: false,
        data: state.data,
      }
    default:
      return state;
  }
};

export default signalReducer;
