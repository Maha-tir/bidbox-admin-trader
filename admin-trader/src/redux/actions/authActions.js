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
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    let data = JSON.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: "https://api.bidbox.community/api/v1/auth/trader/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        dispatch(loginSuccess(response.data));
        console.log(response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            user_login: true,
            jwt_token: response.data.jwt_token,
            refresh_token: response.data.refresh_token,
          })
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.jwt_token}`;
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        dispatch(loginFail(error.response.data.message));
        setErrorMessage(error.response.data.message);
      });
  };
};
