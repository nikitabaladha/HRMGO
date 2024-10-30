import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const menuConfig = [
  {
    id: "dashboard",
    label: "Dashboard",
    iconClass: "ti ti-home",
    link: "#!",
    subMenu: [
      {
        id: "overview",
        label: "Overview",
        link: "https://demo.workdo.io/hrmgo/dashboard",
      },
      {
        id: "report",
        label: "Report",
        subMenu: [
          {
            id: "income-expense",
            label: "Income Vs Expense",
            link: "https://demo.workdo.io/hrmgo/report/income-expense",
          },
          {
            id: "monthly-attendance",
            label: "Monthly Attendance",
            link: "https://demo.workdo.io/hrmgo/report/monthly/attendance",
          },
          {
            id: "leave",
            label: "Leave",
            link: "https://demo.workdo.io/hrmgo/report/leave",
          },
          {
            id: "account-statement",
            label: "Account Statement",
            link: "https://demo.workdo.io/hrmgo/report/account-statement",
          },
          {
            id: "payroll",
            label: "Payroll",
            link: "https://demo.workdo.io/hrmgo/report/payroll",
          },
          {
            id: "timesheet",
            label: "Timesheet",
            link: "https://demo.workdo.io/hrmgo/report/timesheet",
          },
        ],
      },
    ],
  },
  {
    id: "staff",
    label: "Staff",
    iconClass: "ti ti-users",
    link: "#!",
    subMenu: [
      {
        id: "user",
        label: "User",
        link: "https://demo.workdo.io/hrmgo/user",
      },
      {
        id: "roles",
        label: "Role",
        link: "https://demo.workdo.io/hrmgo/roles",
      },
      {
        id: "employee-profile",
        label: "Employee Profile",
        link: "https://demo.workdo.io/hrmgo/employee-profile",
      },
    ],
  },
  {
    id: "employee",
    label: "Employee",
    iconClass: "ti ti-user",
    link: "https://demo.workdo.io/hrmgo/employee",
  },
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (subMenuId) => {
    setActiveSubMenu(activeSubMenu === subMenuId ? null : subMenuId);
  };

  const renderSubMenu = (subMenu) => (
    <ul className="dash-submenu">
      {subMenu.map((item) => (
        <li key={item.id} className="dash-item">
          {item.subMenu ? (
            <a
              href="#!"
              className="dash-link"
              onClick={() => toggleSubMenu(item.id)}
            >
              <span className="dash-mtext">{item.label}</span>
              <span className="dash-arrow">
                <IoIosArrowForward />
              </span>
            </a>
          ) : (
            <a href={item.link} className="dash-link">
              {item.label}
            </a>
          )}
          {item.subMenu &&
            activeSubMenu === item.id &&
            renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="dash-sidebar light-sidebar transprent-bg">
      <div className="navbar-wrapper">
        <div className="m-header main-logo">
          <a href="https://demo.workdo.io/hrmgo/dashboard" className="b-brand">
            <img
              src="https://demo.workdo.io/hrmgo/storage/uploads/logo/logo-dark.png?1730091906"
              alt="HRMGo"
              className="logo logo-lg"
            />
            <img
              src="https://demo.workdo.io/hrmgo/storage/uploads/logo/logo-dark.png"
              alt="HRMGo"
              className="logo logo-sm"
            />
          </a>
        </div>
        <div className="navbar-content">
          <ul className="dash-navbar">
            {menuConfig.map((menu) => (
              <li
                key={menu.id}
                className={`dash-item dash-hasmenu ${
                  activeMenu === menu.id ? "active" : ""
                }`}
              >
                <a
                  href={menu.link}
                  className="dash-link"
                  onClick={() => toggleMenu(menu.id)}
                >
                  <span className="dash-micon">
                    <i className={menu.iconClass} />
                  </span>
                  <span className="dash-mtext">{menu.label}</span>
                  {menu.subMenu && (
                    <span className="dash-arrow">
                      <IoIosArrowForward />
                    </span>
                  )}
                </a>
                {menu.subMenu &&
                  activeMenu === menu.id &&
                  renderSubMenu(menu.subMenu)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

// ================================================
