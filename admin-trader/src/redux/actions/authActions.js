import * as types from "./actionTypes";
import axios from "axios";

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
export const logoutInitiate = () => ({
  type: types.LOGOUT_USER,
});

export const loginAction = (email, password, history, setErrorMessage) => {
  return function (dispatch) {
    dispatch(loginStart());
    var qs = require("qs");
    var data = qs.stringify({
      email,
      password,
    });
    var config = {
      method: "post",
      url: "https://api.bidbox.community/api/v1/auth/admin/login",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        dispatch(loginSuccess(response.data));
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            access_token: response.data,
          })
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data}`;
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        dispatch(loginFail(error.response.data.message));
        setErrorMessage(error.response.data.message);
      });
  };
};
