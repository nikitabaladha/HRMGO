import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

const Sidebar = () => {
  const [dashboardExpanded, setDashboardExpanded] = useState(false);
  const [reportExpanded, setReportExpanded] = useState(false);
  const [staffExpanded, setStaffExpanded] = useState(false);
  const [payrollExpanded, setPayrollExpanded] = useState(false);
  const [timesheetExpanded, setTimesheetExpanded] = useState(false);
  const [attendanceExpanded, setAttendanceExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleDashboard = () => {
    setDashboardExpanded(!dashboardExpanded);
    setReportExpanded(false);
    setStaffExpanded(false);
    setPayrollExpanded(false);
    setTimesheetExpanded(false);
    setAttendanceExpanded(false);
    setActiveLink("dashboard");
  };

  const toggleReport = () => {
    setReportExpanded(!reportExpanded);
    setDashboardExpanded(false);
    setStaffExpanded(false);
    setPayrollExpanded(false);
    setTimesheetExpanded(false);
    setAttendanceExpanded(false);
    setActiveLink("report");
  };

  const toggleStaff = () => {
    setStaffExpanded(!staffExpanded);
    setDashboardExpanded(false);
    setReportExpanded(false);
    setPayrollExpanded(false);
    setTimesheetExpanded(false);
    setAttendanceExpanded(false);
    setActiveLink("staff");
  };

  const togglePayroll = () => {
    setPayrollExpanded(!payrollExpanded);
    setDashboardExpanded(false);
    setReportExpanded(false);
    setStaffExpanded(false);
    setTimesheetExpanded(false);
    setAttendanceExpanded(false);
    setActiveLink("payroll");
  };

  const toggleTimesheet = () => {
    setTimesheetExpanded(!timesheetExpanded);
    setDashboardExpanded(false);
    setReportExpanded(false);
    setStaffExpanded(false);
    setPayrollExpanded(false);
    setAttendanceExpanded(false);
    setActiveLink("timesheet");
  };

  const toggleAttendance = () => {
    setAttendanceExpanded(!attendanceExpanded);
    setTimesheetExpanded(false);
    setDashboardExpanded(false);
    setReportExpanded(false);
    setStaffExpanded(false);
    setPayrollExpanded(false);
    setActiveLink("attendance");
  };
  return (
    <nav className="navbar small-screen-navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="brand-logo" alt="Logo" width="30" height="24" />
        </Link>

        <div className="navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav flex-column">
            {/* Dashboard */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                role="button"
                onClick={toggleDashboard}
                aria-expanded={dashboardExpanded}
              >
                <span>
                  <AiOutlineHome />
                </span>
                <span>Dashboard</span>
                <IoIosArrowForward
                  className={`dropdown-toggle-icon ${
                    dashboardExpanded ? "rotate-90" : ""
                  }`}
                />
              </Link>
              <ul
                className={`dropdown-menu ${dashboardExpanded ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "dashboard" ? "active-link" : ""
                    }`}
                  >
                    Overview
                  </Link>
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "digitalReport" ? "active-link" : ""
                    }`}
                    onClick={toggleReport}
                    aria-expanded={reportExpanded}
                  >
                    Report
                    <IoIosArrowForward
                      className={`dropdown-toggle-icon ${
                        reportExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </Link>
                  <ul
                    className={`dropdown-menu dropdown-submenu ${
                      reportExpanded ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Income Vs Expense
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Attendance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Account Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Payroll
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Timesheet
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Staff */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                role="button"
                onClick={toggleStaff}
                aria-expanded={staffExpanded}
              >
                <span>Staff</span>
                <IoIosArrowForward
                  className={`dropdown-toggle-icon ${
                    staffExpanded ? "rotate-90" : ""
                  }`}
                />
              </Link>
              <ul
                className={`dropdown-menu ${staffExpanded ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "staff" ? "active-link" : ""
                    }`}
                  >
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "staff" ? "active-link" : ""
                    }`}
                  >
                    Role
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "staff" ? "active-link" : ""
                    }`}
                  >
                    Employee Profile
                  </Link>
                </li>
              </ul>
            </li>

            {/* Employee */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page">
                Employee
              </Link>
            </li>

            {/* Pay Roll */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                role="button"
                onClick={togglePayroll}
                aria-expanded={staffExpanded}
              >
                <span>Payroll</span>
                <IoIosArrowForward
                  className={`dropdown-toggle-icon ${
                    payrollExpanded ? "rotate-90" : ""
                  }`}
                />
              </Link>
              <ul
                className={`dropdown-menu ${payrollExpanded ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "payroll" ? "active-link" : ""
                    }`}
                  >
                    Set Salary
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "payroll" ? "active-link" : ""
                    }`}
                  >
                    Pay Slip
                  </Link>
                </li>
              </ul>
            </li>

            {/* Time Sheet */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                role="button"
                onClick={toggleTimesheet}
                aria-expanded={timesheetExpanded}
              >
                <span>
                  <AiOutlineHome />
                </span>
                <span>Timesheet</span>
                <IoIosArrowForward
                  className={`dropdown-toggle-icon ${
                    timesheetExpanded ? "rotate-90" : ""
                  }`}
                />
              </Link>
              <ul
                className={`dropdown-menu ${timesheetExpanded ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "timesheet" ? "active-link" : ""
                    }`}
                  >
                    Manage Leave
                  </Link>
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${
                      activeLink === "attendance" ? "active-link" : ""
                    }`}
                    onClick={toggleAttendance}
                    aria-expanded={attendanceExpanded}
                  >
                    Attendance
                    <IoIosArrowForward
                      className={`dropdown-toggle-icon ${
                        attendanceExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </Link>
                  <ul
                    className={`dropdown-menu dropdown-submenu ${
                      attendanceExpanded ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "report" ? "active-link" : ""
                        }`}
                      >
                        Marked Attendance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${
                          activeLink === "attendance" ? "active-link" : ""
                        }`}
                      >
                        Bulk Attendance
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
