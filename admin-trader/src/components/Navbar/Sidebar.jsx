import React from "react";
import { Link } from "react-router-dom";
import sidebarItems from "../../assets/jsonData/sidebar_routes.json";

const Sidebar = (props) => {
  const SidebarItem = (props) => {
    const active = props.active ? "active" : "";

    return (
      <Link to={props.route} className={`sidebar-link ${active}`}>
        <div className="sidebar-link-icon">
          <i className={props.icon}></i>
        </div>
        {props.display_name}
      </Link>
    );
  };
  const activeItem = sidebarItems.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className={props.className ? `sidebar ${props.className}` : "sidebar"}>
      <div className="sidebar-header">
        <h1 className="sidebar-logo text-uppercase">Admin Trader</h1>
      </div>
      <div className="sidebar-content">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            route={item.route}
            icon={item.icon}
            display_name={item.display_name}
            active={index === activeItem}
          />
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
