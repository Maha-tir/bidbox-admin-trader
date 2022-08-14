import * as types from "../actions/actionTypes";
const initialState = {
    data : [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PAIR_START:
            return {
                ...state,
                loading: true,
            };
        case types.PAIR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.PAIR_UPDATE:
            for (let index = 0; index < state.data.length; index++) {
                const el = state.data[index];
                if (el.symbol === action.payload.symbol){
                    state.data[index].price = action.payload.price
                    state.data[index].price_chg = action.payload.price_chg
                    break
                }   
            }
            return {
                loading:false,
                data:state.data
            }
        case types.PAIR_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
            };
        default:
            return state;
    }
};

export default reducer;
