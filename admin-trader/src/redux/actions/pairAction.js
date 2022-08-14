import * as types from "./actionTypes";
import axios from "axios";

const pairStart = () => ({
    type: types.PAIR_START,
});

const pairSuccess = (data) => ({
    type: types.PAIR_SUCCESS,
    payload: data,
});

const pairUpdate = (data) => ({
    type: types.PAIR_UPDATE,
    payload: data,
});
const pairFail = (error) => ({
    type: types.PAIR_FAIL,
    payload: error,
});

export { pairSuccess, pairUpdate };
