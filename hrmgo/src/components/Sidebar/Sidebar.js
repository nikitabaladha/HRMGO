import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";

import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { TbReceipt } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { HiCubeTransparent } from "react-icons/hi";
import { LuWallet } from "react-icons/lu";
import { TbSchool } from "react-icons/tb";
import { LuUserPlus } from "react-icons/lu";
import { TbLicense } from "react-icons/tb";
import { TbDeviceFloppy } from "react-icons/tb";
import { LuTicket } from "react-icons/lu";
import { TbCalendarEvent } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { TbMedicalCross } from "react-icons/tb";
import { CiFileOn } from "react-icons/ci";
import { TbTemplate } from "react-icons/tb";
import { TbPray } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { FiTable } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const menuConfig = [
  // dashboard
  {
    id: "dashboard",
    label: "Dashboard",
    iconClass: <AiOutlineHome />,
    link: "#!",
    subMenu: [
      {
        id: "overview",
        label: "Overview",
        link: "/dashboard",
      },
      {
        id: "report",
        label: "Report",
        subMenu: [
          {
            id: "incomeExpense",
            label: "Income Vs Expense",
            link: "/report/income-expense",
          },
          {
            id: "monthlyAttendance",
            label: "Monthly Attendance",
            link: "https://demo.workdo.io/hrmgo/report/monthly/attendance",
          },
          {
            id: "leave",
            label: "Leave",
            link: "https://demo.workdo.io/hrmgo/report/leave",
          },
          {
            id: "accountStatement",
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

  // staff
  {
    id: "staff",
    label: "Staff",
    iconClass: <TbUsers />,
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
        id: "employeeProfile",
        label: "Employee Profile",
        link: "https://demo.workdo.io/hrmgo/employee-profile",
      },
    ],
  },

  // employee
  {
    id: "employee",
    label: "Employee",
    iconClass: <LuUser />,
    link: "https://demo.workdo.io/hrmgo/employee",
  },

  // pay roll
  {
    id: "payroll",
    label: "Payroll",
    iconClass: <TbReceipt />,
    link: "#!",
    subMenu: [
      {
        id: "setSalary",
        label: "Set Salary",
        link: "https://demo.workdo.io/hrmgo/setsalary",
      },
      {
        id: "payslip",
        label: "Payslip",
        link: "https://demo.workdo.io/hrmgo/payslip",
      },
    ],
  },

  // timessheet
  {
    id: "timeSheet",
    label: "Timesheet",
    iconClass: <FaRegClock />,
    link: "#!",
    subMenu: [
      {
        id: "timeSheet",
        label: "Timesheet",
        link: "https://demo.workdo.io/hrmgo/timesheet",
      },
      {
        id: "manageLeave",
        label: "Manage Leave",
        link: "https://demo.workdo.io/hrmgo/manageleave",
      },
      {
        id: "attendance",
        label: "Attendance",
        subMenu: [
          {
            id: "markedAttendance",
            label: "Marked Attendance",
            link: "https://demo.workdo.io/hrmgo/attendanceemployee",
          },
          {
            id: "bulkAttendance",
            label: "Bulk Attendance",
            link: "https://demo.workdo.io/hrmgo/attendanceemployee/bulkattendance",
          },
        ],
      },
    ],
  },

  // performance
  {
    id: "performance",
    label: "Performance",
    iconClass: <HiCubeTransparent />,
    link: "#!",
    subMenu: [
      {
        id: "indicator",
        label: "Indicator",
        link: "https://demo.workdo.io/hrmgo/indicator",
      },
      {
        id: "appraisal",
        label: "Appraisal",
        link: "https://demo.workdo.io/hrmgo/appraisal",
      },
      {
        id: "goalTracking",
        label: "Goal Tracking",
        link: "https://demo.workdo.io/hrmgo/goaltracking",
      },
    ],
  },

  // finance
  {
    id: "finance",
    label: "Finance",
    iconClass: <LuWallet />,
    link: "#!",
    subMenu: [
      {
        id: "accountList",
        label: "Account List",
        link: "https://demo.workdo.io/hrmgo/accountlist",
      },
      {
        id: "accountBalance",
        label: "Account Balance",
        link: "https://demo.workdo.io/hrmgo/accountbalance",
      },
      {
        id: "payees",
        label: "Payees",
        link: "https://demo.workdo.io/hrmgo/payees",
      },
      {
        id: "payers",
        label: "payers",
        link: "https://demo.workdo.io/hrmgo/payer",
      },
      {
        id: "deposit",
        label: "Deposit",
        link: "https://demo.workdo.io/hrmgo/deposit",
      },

      {
        id: "expense",
        label: "Expense",
        link: "https://demo.workdo.io/hrmgo/expense",
      },
      {
        id: "transferBalance",
        label: "Transfer Balance",
        link: "https://demo.workdo.io/hrmgo/transferbalance",
      },
    ],
  },

  // training
  {
    id: "training",
    label: "Training",
    iconClass: <TbSchool />,
    link: "#!",
    subMenu: [
      {
        id: "trainingList",
        label: "Training List",
        link: "https://demo.workdo.io/hrmgo/training",
      },
      {
        id: "trainer",
        label: "Trainer",
        link: "https://demo.workdo.io/hrmgo/trainer",
      },
    ],
  },

  // hr admin setup
  {
    id: "hrAdminSetup",
    label: "Hr Admin Setup",
    iconClass: <LuUserPlus />,
    link: "#!",
    subMenu: [
      {
        id: "award",
        label: "Award",
        link: "https://demo.workdo.io/hrmgo/award",
      },
      {
        id: "transfer",
        label: "Transfer",
        link: "https://demo.workdo.io/hrmgo/transfer",
      },
      {
        id: "resignation",
        label: "Resignation",
        link: "https://demo.workdo.io/hrmgo/resignation",
      },
      {
        id: "trip",
        label: "Trip",
        link: "https://demo.workdo.io/hrmgo/travel",
      },
      {
        id: "promotion",
        label: "Promotion",
        link: "https://demo.workdo.io/hrmgo/promotion",
      },

      {
        id: "complaints",
        label: "Complaints",
        link: "https://demo.workdo.io/hrmgo/complaint",
      },
      {
        id: "warning",
        label: "Warning",
        link: "https://demo.workdo.io/hrmgo/warning",
      },
      {
        id: "termination",
        label: "Termination",
        link: "https://demo.workdo.io/hrmgo/termination",
      },
      {
        id: "announcement",
        label: "Announcement",
        link: "https://demo.workdo.io/hrmgo/announcement",
      },
      {
        id: "holidays",
        label: "Holidays",
        link: "https://demo.workdo.io/hrmgo/warning",
      },
    ],
  },

  // Recruitment
  {
    id: "recruitment",
    label: "Recruitment",
    iconClass: <TbLicense />,
    link: "#!",
    subMenu: [
      {
        id: "jobs",
        label: "Jobs",
        link: "https://demo.workdo.io/hrmgo/job",
      },
      {
        id: "jobCreate",
        label: "Job Create",
        link: "https://demo.workdo.io/hrmgo/job/create",
      },
      {
        id: "jobApplication",
        label: "Job Application",
        link: "https://demo.workdo.io/hrmgo/job-application",
      },
      {
        id: "jobCandidate",
        label: "Job Candidate",
        link: "https://demo.workdo.io/hrmgo/candidates-job-applications",
      },
      {
        id: "jobOnboarding",
        label: "Job On-Boarding",
        link: "https://demo.workdo.io/hrmgo/job-onboard",
      },
      {
        id: "customQuestion",
        label: "Custom Question",
        link: "https://demo.workdo.io/hrmgo/custom-question",
      },
      {
        id: "interviewSchedule",
        label: "Interview Schedule",
        link: "https://demo.workdo.io/hrmgo/interview-schedule",
      },
      {
        id: "career",
        label: "Career",
        link: "https://demo.workdo.io/hrmgo/career/1/en",
        target: "_blank",
      },
    ],
  },

  // Contract
  {
    id: "contract",
    label: "Contracts",
    iconClass: <TbDeviceFloppy />,
    link: "https://demo.workdo.io/hrmgo/contract",
  },

  // Ticket
  {
    id: "ticket",
    label: "Ticket",
    iconClass: <LuTicket />,
    link: "https://demo.workdo.io/hrmgo/ticket",
  },

  // Event
  {
    id: "event",
    label: "Event",
    iconClass: <TbCalendarEvent />,
    link: "https://demo.workdo.io/hrmgo/event",
  },

  // Meeting
  {
    id: "meeting",
    label: "Meeting",
    iconClass: <MdOutlineCalendarMonth />,
    link: "https://demo.workdo.io/hrmgo/meeting",
  },

  // Zoom Meeting
  {
    id: "zoomMeeting",
    label: "Zoom Meeting",
    iconClass: <CiVideoOn />,
    link: "https://demo.workdo.io/hrmgo/zoom-meeting",
  },

  // Assets
  {
    id: "assets",
    label: "Assets",
    iconClass: <TbMedicalCross />,
    link: "https://demo.workdo.io/hrmgo/account-assets",
  },

  // Document
  {
    id: "document",
    label: "Document",
    iconClass: <CiFileOn />,
    link: "https://demo.workdo.io/hrmgo/document-upload",
  },

  // Email Templates
  {
    id: "emailTemplates",
    label: "Email Templates",
    iconClass: <TbTemplate />,
    link: "https://demo.workdo.io/hrmgo/email_template_lang/1/en",
  },

  // Company Policy
  {
    id: "companyPolicy",
    label: "Company Policy",
    iconClass: <TbPray />,
    link: "https://demo.workdo.io/hrmgo/company-policy",
  },

  // Messenger
  {
    id: "messenger",
    label: "Messenger",
    iconClass: <LuMessagesSquare />,
    link: "https://demo.workdo.io/hrmgo/chats",
  },

  // Notification Template
  {
    id: "notificationTemplate",
    label: "Notification Template",
    iconClass: <GoBell />,
    link: "https://demo.workdo.io/hrmgo/notification-templates",
  },

  // HRM System Setup
  {
    id: "hrmSystemSetup",
    label: "HRM System Setup",
    iconClass: <FiTable />,
    link: "https://demo.workdo.io/hrmgo/branch",
  },

  // Landing Page
  {
    id: "landingPage",
    label: "Landing Page",
    iconClass: <TbLicense />,
    link: "https://demo.workdo.io/hrmgo/landingpage",
  },

  // System Setting
  {
    id: "systemSetting",
    label: "System Setting",
    iconClass: <IoSettingsOutline />,
    link: "https://demo.workdo.io/hrmgo/settings",
  },
];

const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const sidebarRef = useRef(null);

  // Handle clicks outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarVisible
      ) {
        toggleSidebar(); // Close the sidebar if clicking outside
      }
    };

    // Add event listener for mouse clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarVisible, toggleSidebar]);

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
            <Link
              to="#!"
              className="dash-link"
              onClick={() => toggleSubMenu(item.id)}
            >
              <span className="dash-mtext">{item.label}</span>
              <span
                className={`dash-arrow ${
                  activeSubMenu === item.id ? "active" : ""
                }`}
                style={{
                  transform:
                    activeSubMenu === item.id
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <IoIosArrowForward />
              </span>
            </Link>
          ) : (
            <Link href={item.link} className="dash-link">
              {item.label}
            </Link>
          )}
          {item.subMenu &&
            activeSubMenu === item.id &&
            renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {" "}
      <nav
        ref={sidebarRef} // Attach ref here
        className={`dash-sidebar light-sidebar transprent-bg ${
          sidebarVisible ? "mob-sidebar-active" : ""
        }`}
      >
        <div className="navbar-wrapper" style={{ display: "block" }}>
          <div className="m-header main-logo">
            <Link
              to="https://demo.workdo.io/hrmgo/dashboard"
              className="b-brand"
            >
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
            </Link>
          </div>

          <div
            className="navbar-content active dash-trigger"
            data-simplebar="init"
          >
            <div className="simplebar-wrapper" style={{ margin: "-10px 0px" }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: "0px", bottom: "0px" }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex="0"
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "10px 0px" }}
                    >
                      {" "}
                      <PerfectScrollbar>
                        {" "}
                        <ul className="dash-navbar">
                          {menuConfig.map((menu) => (
                            <li
                              key={menu.id}
                              className={`dash-item dash-hasmenu ${
                                activeMenu === menu.id ? "active" : ""
                              }`}
                            >
                              <Link
                                to={menu.link}
                                className="dash-link"
                                onClick={() => toggleMenu(menu.id)}
                              >
                                <span className="dash-micon">
                                  {menu.iconClass}
                                </span>
                                <span className="dash-mtext">{menu.label}</span>
                                {menu.subMenu && (
                                  <span
                                    className={`dash-arrow ${
                                      activeMenu === menu.id ? "active" : ""
                                    }`}
                                    style={{
                                      transform:
                                        activeMenu === menu.id
                                          ? "rotate(90deg)"
                                          : "rotate(0deg)",
                                      transition: "transform 0.3s ease",
                                    }}
                                  >
                                    <IoIosArrowForward />
                                  </span>
                                )}
                              </Link>
                              {menu.subMenu &&
                                activeMenu === menu.id &&
                                renderSubMenu(menu.subMenu)}
                            </li>
                          ))}
                        </ul>
                      </PerfectScrollbar>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: "1502px" }}
              ></div>
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ width: "0px", display: "none" }}
              ></div>
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: "260px",
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay: Visible only when sidebarVisible is true */}
      {sidebarVisible && (
        <div
          className="dash-menu-overlay"
          onClick={toggleSidebar} // Close sidebar when overlay is clicked
        ></div>
      )}
    </>
  );
};

export default Sidebar;
