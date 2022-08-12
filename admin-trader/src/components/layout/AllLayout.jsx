import React from "react";
import { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Sidebar } from "../Navbar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import axios from "axios";
export const AuthLayout = (props) => {
  return (
    <div className="auth-middle">
      <div className="auth-content">{props.children}</div>
    </div>
  );
};

export const DashboardLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const get_user = () => {};

  const backToAuth = () => {
    history.push("/auth/login");
  };
  const logout = () => {
    dispatch(logoutAction(history));
    // localStorage.removeItem("login");
    // history.push("/auth/login");
    // console.clear();
  };
  return (
    <div className="dashboard-layout">
      {user ? (
        <>
          <header className="header-dashboard">
            <button
              className="btn-control show-sidebar-toggle-btn me-auto"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              Toggle
            </button>
            <div className="breadcrumb pb-0 mb-0 flex-nowrap">
              <li className="breadcrumb-item time-shift">
                <span id="time">Time Shift = 04:32 Minutes</span>
              </li>
              <li className="breadcrumb-item next-shift">
                <span id="nextshift">Next Shift = ...</span>
              </li>
            </div>
            <button className="btn-control logout-button" onClick={logout}>
              Logout
            </button>
          </header>
          <Route
            render={(props) => (
              <Sidebar
                {...props}
                className={showSidebar ? "show-sidebar" : "hide-sidebar"}
              />
            )}
          />
          <div className="dashboard-content">{props.children}</div>
          <div
            className={showSidebar ? "overlay show" : "overlay"}
            onClick={() => setShowSidebar(!showSidebar)}
          ></div>
        </>
      ) : (
        backToAuth()
      )}
    </div>
  );
};
