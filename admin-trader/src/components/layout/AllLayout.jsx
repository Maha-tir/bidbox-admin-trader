import React from "react";
import { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Sidebar } from "../Navbar/Sidebar";

export const AuthLayout = (props) => {
  return (
    <div className="auth-middle">
      <div className="auth-content">{props.children}</div>
    </div>
  );
};

export const DashboardLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="dashboard-layout">
      <header className="header-dashboard">
        <button
          className="btn-control show-sidebar-toggle-btn me-auto"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Toggle
        </button>
        <button className="btn-control logout-button">Logout</button>
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
    </div>
  );
};
