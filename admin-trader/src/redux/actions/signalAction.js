import * as types from "./actionTypes";
import axios from "axios";

const signalStart = () => ({
  type: types.SIGNAL_START,
});

const signalSuccess = (data) => ({
  type: types.SIGNAL_SUCCESS,
  payload: data,
});

const signalFail = (error) => ({
  type: types.SIGNAL_FAIL,
  payload: error,
});
const signalUpdate = (data) => ({
  type: types.SIGNAL_UPDATE,
  payload: data,
})
export {
  signalSuccess,signalUpdate
}
export const signalAdd = (
  baseAsset,
  quoteAsset,
  buyPrice,
  sellPrice,
  history
) => {
  return function (dispatch) {
    dispatch(signalStart());
    var data = JSON.stringify({
      base_asset: baseAsset,
      quote_asset: quoteAsset,
      buy_price: buyPrice,
      sell_price: sellPrice,
      exchange_id: 1,
    });
    var config = {
      method: "post",
      url: "https://api.bidbox.community/api/v1/signal-trader",
      headers: {
        Authorization: axios.defaults.headers.common["Authorization"],
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        dispatch(signalSuccess(response.data));
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        dispatch(signalFail(error.response.data.message));
      });
  };
};
