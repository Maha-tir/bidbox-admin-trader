import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarItems from "../../assets/jsonData/sidebar_routes.json";

const Sidebar = (props) => {
  const [dropdownMasterData, setDropdownMasterData] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const SIDEBARLINK = document.querySelectorAll("#link-item");
    SIDEBARLINK.forEach((item) => {
      const PATHNAME = item.getAttribute("href");
      if (location.pathname == PATHNAME) {
        item.classList.add("active");
      }
    });
  }, []);

  return (
    <div className={props.className ? `sidebar ${props.className}` : "sidebar"}>
      <div className="sidebar-header">
        <h1 className="sidebar-logo text-uppercase">Admin Trader</h1>
      </div>
      <div className="sidebar-content">
        {/* {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            route={item.route}
            icon={item.icon}
            display_name={item.display_name}
            active={index === activeItem}
          />
        ))} */}
        <Link to="/admin/dashboard" className="sidebar-link" id="link-item">
          <div className="sidebar-link-icon">
            <i className="bx bx-home-alt"></i>
          </div>
          Dashboard
        </Link>
        {/* <li
          className={
            dropdownMasterData
              ? "sidebar-list-dropdown show-dropdown"
              : "sidebar-list-dropdown"
          }
          onClick={() => setDropdownMasterData(!dropdownMasterData)}
          style={{ transition: "height 0.5s" }}
        >
          <div className="d-flex align-items-center sidebar-link-dropdown">
            <div className="sidebar-link-icon">
              <i className="bx bx-folder"></i>
            </div>
            Master Data
          </div>
          <div
            className={
              dropdownMasterData
                ? "sidebar-dropdown show-dropdown"
                : "sidebar-dropdown"
            }
          >
            <Link
              to="/admin/master-pair"
              className="sidebar-link-master-data"
              id="link-item"
            >
              <div className="sidebar-link-icon-master-data">
                <i className="bx bx-circle"></i>
              </div>
              Master Pair
            </Link>
            <Link
              to="/admin/master-trader"
              className="sidebar-link-master-data"
              id="link-item"
            >
              <div className="sidebar-link-icon-master-data">
                <i className="bx bx-circle"></i>
              </div>
              Master Trader
            </Link>
          </div>
        </li> */}
        <Link
          to="/admin/history-trading"
          className="sidebar-link"
          id="link-item"
        >
          <div className="sidebar-link-icon">
            <i className="bx bx-time"></i>
          </div>
          History Trading
        </Link>
        <Link
          to="/admin/profit-trading"
          className="sidebar-link"
          id="link-item"
        >
          <div className="sidebar-link-icon">
            <i className="bx bx-receipt"></i>
          </div>
          Profit Trading
        </Link>
        <Link
          to="/admin/withdraw-profit-trader"
          className="sidebar-link"
          id="link-item"
        >
          <div className="sidebar-link-icon">
            <i className="bx bx-credit-card-front"></i>
          </div>
          WD Profit Trader
        </Link>
        <Link to="/admin/jadwal-shift" className="sidebar-link" id="link-item">
          <div className="sidebar-link-icon">
            <i className="bx bx-calendar"></i>
          </div>
          Jadwal Shift
        </Link>
        <Link to="/admin/sop-trader" className="sidebar-link" id="link-item">
          <div className="sidebar-link-icon">
            <i className="bx bx-bell"></i>
          </div>
          SOP Trader
        </Link>
        <Link to="/admin/news" className="sidebar-link" id="link-item">
          <div className="sidebar-link-icon">
            <i className="bx bxs-megaphone"></i>
          </div>
          News
        </Link>
      </div>
    </div>
  );
};

export { Sidebar };
