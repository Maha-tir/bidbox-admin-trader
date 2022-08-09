import React from "react";
import { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Sidebar } from "../Navbar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/actions/action";

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

  const backToAuth = () => {
    history.push("/auth/login");
  };
  const logout = () => {
    dispatch(logoutInitiate());
    localStorage.removeItem("login");
    history.push("/auth/login");
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
