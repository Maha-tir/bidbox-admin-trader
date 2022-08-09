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
export const loginInitiate = (email, password, history) => {
  return function (dispatch) {
    dispatch(loginStart());
    var qs = require("qs");
    var data = qs.stringify({
      email,
      password,
    });
    var config = {
      method: "post",
      url: "http://localhost:5000/auth/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        dispatch(loginSuccess(response.data.access_token));
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            access_token: response.data.access_token,
          })
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`;
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        dispatch(loginFail(error.response.data.message));
      });
  };
};
