import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      history.push("/admin/dashboard");
    }
  }, [user]);

  const LOGINSUBMIT = async (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password, history, setErrorMessage));
  };
  return (
    <div className="auth-box">
      <div className="auth-header">
        <h1 className="auth-title">Admin Trader</h1>
        <p className="auth-subtitle">Login to your account</p>
      </div>
      {errorMessage ? errorMessage : null}
      <form onSubmit={LOGINSUBMIT} className="form-validation">
        <div className="input-field">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="my-2 d-flex align-items-center justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="remember me"
            />
            <label className="form-check-label" htmlFor="remember me">
              Remember me
            </label>
          </div>
          <Link to="/auth/forgot-password" className="text-link">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="btn btn-first btn-block w-100%">
          Login
        </button>
        <div className="auth-footer">
          <p className="text-secondary text-small text-center mb-5">
            Don't have any account?{" "}
            <Link to="/auth/register" className="text-link">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
