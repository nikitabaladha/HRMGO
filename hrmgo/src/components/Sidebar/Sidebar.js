// import React, { useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";

// const menuConfig = [
//   // dashboard
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     iconClass: "ti ti-home",
//     link: "#!",
//     subMenu: [
//       {
//         id: "overview",
//         label: "Overview",
//         link: "https://demo.workdo.io/hrmgo/dashboard",
//       },
//       {
//         id: "report",
//         label: "Report",
//         subMenu: [
//           {
//             id: "incomeExpense",
//             label: "Income Vs Expense",
//             link: "https://demo.workdo.io/hrmgo/report/income-expense",
//           },
//           {
//             id: "monthlyAttendance",
//             label: "Monthly Attendance",
//             link: "https://demo.workdo.io/hrmgo/report/monthly/attendance",
//           },
//           {
//             id: "leave",
//             label: "Leave",
//             link: "https://demo.workdo.io/hrmgo/report/leave",
//           },
//           {
//             id: "accountStatement",
//             label: "Account Statement",
//             link: "https://demo.workdo.io/hrmgo/report/account-statement",
//           },
//           {
//             id: "payroll",
//             label: "Payroll",
//             link: "https://demo.workdo.io/hrmgo/report/payroll",
//           },
//           {
//             id: "timesheet",
//             label: "Timesheet",
//             link: "https://demo.workdo.io/hrmgo/report/timesheet",
//           },
//         ],
//       },
//     ],
//   },

//   // staff
//   {
//     id: "staff",
//     label: "Staff",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "user",
//         label: "User",
//         link: "https://demo.workdo.io/hrmgo/user",
//       },
//       {
//         id: "roles",
//         label: "Role",
//         link: "https://demo.workdo.io/hrmgo/roles",
//       },
//       {
//         id: "employeeProfile",
//         label: "Employee Profile",
//         link: "https://demo.workdo.io/hrmgo/employee-profile",
//       },
//     ],
//   },

//   // employee
//   {
//     id: "employee",
//     label: "Employee",
//     iconClass: "ti ti-user",
//     link: "https://demo.workdo.io/hrmgo/employee",
//   },

//   // pay roll
//   {
//     id: "payroll",
//     label: "Payroll",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "setSalary",
//         label: "Set Salary",
//         link: "https://demo.workdo.io/hrmgo/setsalary",
//       },
//       {
//         id: "payslip",
//         label: "Payslip",
//         link: "https://demo.workdo.io/hrmgo/payslip",
//       },
//     ],
//   },

//   // timessheet
//   {
//     id: "timeSheet",
//     label: "Timesheet",
//     iconClass: "ti ti-home",
//     link: "#!",
//     subMenu: [
//       {
//         id: "timeSheet",
//         label: "Timesheet",
//         link: "https://demo.workdo.io/hrmgo/timesheet",
//       },
//       {
//         id: "manageLeave",
//         label: "Manage Leave",
//         link: "https://demo.workdo.io/hrmgo/manageleave",
//       },
//       {
//         id: "attendance",
//         label: "Attendance",
//         subMenu: [
//           {
//             id: "markedAttendance",
//             label: "Marked Attendance",
//             link: "https://demo.workdo.io/hrmgo/attendanceemployee",
//           },
//           {
//             id: "bulkAttendance",
//             label: "Bulk Attendance",
//             link: "https://demo.workdo.io/hrmgo/attendanceemployee/bulkattendance",
//           },
//         ],
//       },
//     ],
//   },

//   // performance
//   {
//     id: "performance",
//     label: "Performance",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "indicator",
//         label: "Indicator",
//         link: "https://demo.workdo.io/hrmgo/indicator",
//       },
//       {
//         id: "appraisal",
//         label: "Appraisal",
//         link: "https://demo.workdo.io/hrmgo/appraisal",
//       },
//       {
//         id: "goalTracking",
//         label: "Goal Tracking",
//         link: "https://demo.workdo.io/hrmgo/goaltracking",
//       },
//     ],
//   },

//   // finance
//   {
//     id: "finance",
//     label: "Finance",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "accountList",
//         label: "Account List",
//         link: "https://demo.workdo.io/hrmgo/accountlist",
//       },
//       {
//         id: "accountBalance",
//         label: "Account Balance",
//         link: "https://demo.workdo.io/hrmgo/accountbalance",
//       },
//       {
//         id: "payees",
//         label: "Payees",
//         link: "https://demo.workdo.io/hrmgo/payees",
//       },
//       {
//         id: "payers",
//         label: "payers",
//         link: "https://demo.workdo.io/hrmgo/payer",
//       },
//       {
//         id: "deposit",
//         label: "Deposit",
//         link: "https://demo.workdo.io/hrmgo/deposit",
//       },

//       {
//         id: "expense",
//         label: "Expense",
//         link: "https://demo.workdo.io/hrmgo/expense",
//       },
//       {
//         id: "transferBalance",
//         label: "Transfer Balance",
//         link: "https://demo.workdo.io/hrmgo/transferbalance",
//       },
//     ],
//   },

//   // training
//   {
//     id: "training",
//     label: "Training",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "trainingList",
//         label: "Training List",
//         link: "https://demo.workdo.io/hrmgo/training",
//       },
//       {
//         id: "trainer",
//         label: "Trainer",
//         link: "https://demo.workdo.io/hrmgo/trainer",
//       },
//     ],
//   },

//   // hr admin setup
//   {
//     id: "hrAdminSetup",
//     label: "Hr Admin Setup",
//     iconClass: "ti ti-users",
//     link: "#!",
//     subMenu: [
//       {
//         id: "award",
//         label: "Award",
//         link: "https://demo.workdo.io/hrmgo/award",
//       },
//       {
//         id: "transfer",
//         label: "Transfer",
//         link: "https://demo.workdo.io/hrmgo/transfer",
//       },
//       {
//         id: "resignation",
//         label: "Resignation",
//         link: "https://demo.workdo.io/hrmgo/resignation",
//       },
//       {
//         id: "trip",
//         label: "Trip",
//         link: "https://demo.workdo.io/hrmgo/travel",
//       },
//       {
//         id: "promotion",
//         label: "Promotion",
//         link: "https://demo.workdo.io/hrmgo/promotion",
//       },

//       {
//         id: "complaints",
//         label: "Complaints",
//         link: "https://demo.workdo.io/hrmgo/complaint",
//       },
//       {
//         id: "warning",
//         label: "Warning",
//         link: "https://demo.workdo.io/hrmgo/warning",
//       },
//       {
//         id: "termination",
//         label: "Termination",
//         link: "https://demo.workdo.io/hrmgo/termination",
//       },
//       {
//         id: "announcement",
//         label: "Announcement",
//         link: "https://demo.workdo.io/hrmgo/announcement",
//       },
//       {
//         id: "holidays",
//         label: "Holidays",
//         link: "https://demo.workdo.io/hrmgo/warning",
//       },
//     ],
//   },

//   // Recruitment
//   {
//     id: "recruitment",
//     label: "Recruitment",
//     iconClass: "ti ti-license",
//     link: "#!",
//     subMenu: [
//       {
//         id: "jobs",
//         label: "Jobs",
//         link: "https://demo.workdo.io/hrmgo/job",
//       },
//       {
//         id: "jobCreate",
//         label: "Job Create",
//         link: "https://demo.workdo.io/hrmgo/job/create",
//       },
//       {
//         id: "jobApplication",
//         label: "Job Application",
//         link: "https://demo.workdo.io/hrmgo/job-application",
//       },
//       {
//         id: "jobCandidate",
//         label: "Job Candidate",
//         link: "https://demo.workdo.io/hrmgo/candidates-job-applications",
//       },
//       {
//         id: "jobOnboarding",
//         label: "Job On-Boarding",
//         link: "https://demo.workdo.io/hrmgo/job-onboard",
//       },
//       {
//         id: "customQuestion",
//         label: "Custom Question",
//         link: "https://demo.workdo.io/hrmgo/custom-question",
//       },
//       {
//         id: "interviewSchedule",
//         label: "Interview Schedule",
//         link: "https://demo.workdo.io/hrmgo/interview-schedule",
//       },
//       {
//         id: "career",
//         label: "Career",
//         link: "https://demo.workdo.io/hrmgo/career/1/en",
//         target: "_blank",
//       },
//     ],
//   },

//   // Contract
//   {
//     id: "contract",
//     label: "Contracts",
//     iconClass: "ti ti-device-floppy",
//     link: "https://demo.workdo.io/hrmgo/contract",
//   },

//   // Ticket
//   {
//     id: "ticket",
//     label: "Ticket",
//     iconClass: "ti ti-ticket",
//     link: "https://demo.workdo.io/hrmgo/ticket",
//   },

//   // Event
//   {
//     id: "event",
//     label: "Event",
//     iconClass: "ti ti-calendar-event",
//     link: "https://demo.workdo.io/hrmgo/event",
//   },

//   // Meeting
//   {
//     id: "meeting",
//     label: "Meeting",
//     iconClass: "ti ti-calendar-time",
//     link: "https://demo.workdo.io/hrmgo/meeting",
//   },

//   // Zoom Meeting
//   {
//     id: "zoomMeeting",
//     label: "Zoom Meeting",
//     iconClass: "ti ti-video",
//     link: "https://demo.workdo.io/hrmgo/zoom-meeting",
//   },

//   // Assets
//   {
//     id: "assets",
//     label: "Assets",
//     iconClass: "ti ti-medical-cross",
//     link: "https://demo.workdo.io/hrmgo/account-assets",
//   },

//   // Document
//   {
//     id: "document",
//     label: "Document",
//     iconClass: "ti ti-file",
//     link: "https://demo.workdo.io/hrmgo/document-upload",
//   },

//   // Email Templates
//   {
//     id: "emailTemplates",
//     label: "Email Templates",
//     iconClass: "ti ti-template",
//     link: "https://demo.workdo.io/hrmgo/email_template_lang/1/en",
//   },

//   // Company Policy
//   {
//     id: "companyPolicy",
//     label: "Company Policy",
//     iconClass: "ti ti-pray",
//     link: "https://demo.workdo.io/hrmgo/company-policy",
//   },

//   // Messenger
//   {
//     id: "messenger",
//     label: "Messenger",
//     iconClass: "ti ti-messages",
//     link: "https://demo.workdo.io/hrmgo/chats",
//   },

//   // Notification Template
//   {
//     id: "notificationTemplate",
//     label: "Notification Template",
//     iconClass: "ti ti-bell",
//     link: "https://demo.workdo.io/hrmgo/notification-templates",
//   },

//   // HRM System Setup
//   {
//     id: "hrmSystemSetup",
//     label: "HRM System Setup",
//     iconClass: "ti ti-table",
//     link: "https://demo.workdo.io/hrmgo/branch",
//   },

//   // Landing Page
//   {
//     id: "landingPage",
//     label: "Landing Page",
//     iconClass: "ti ti-license",
//     link: "https://demo.workdo.io/hrmgo/landingpage",
//   },

//   // System Setting
//   {
//     id: "systemSetting",
//     label: "System Setting",
//     iconClass: "ti ti-settings",
//     link: "https://demo.workdo.io/hrmgo/settings",
//   },
// ];

// const Sidebar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   const toggleMenu = (menuId) => {
//     setActiveMenu(activeMenu === menuId ? null : menuId);
//     setActiveSubMenu(null);
//   };

//   const toggleSubMenu = (subMenuId) => {
//     setActiveSubMenu(activeSubMenu === subMenuId ? null : subMenuId);
//   };

//   const renderSubMenu = (subMenu) => (
//     <ul className="dash-submenu">
//       {subMenu.map((item) => (
//         <li key={item.id} className="dash-item">
//           {item.subMenu ? (
//             <a
//               href="#!"
//               className="dash-link"
//               onClick={() => toggleSubMenu(item.id)}
//             >
//               <span className="dash-mtext">{item.label}</span>
//               <span className="dash-arrow">
//                 <IoIosArrowForward />
//               </span>
//             </a>
//           ) : (
//             <a href={item.link} className="dash-link">
//               {item.label}
//             </a>
//           )}
//           {item.subMenu &&
//             activeSubMenu === item.id &&
//             renderSubMenu(item.subMenu)}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <nav className="dash-sidebar light-sidebar transprent-bg mob-sidebar-active">
//       <div className="navbar-wrapper">
// <div className="m-header main-logo">
//   <a href="https://demo.workdo.io/hrmgo/dashboard" className="b-brand">
//     <img
//       src="https://demo.workdo.io/hrmgo/storage/uploads/logo/logo-dark.png?1730091906"
//       alt="HRMGo"
//       className="logo logo-lg"
//     />
//     <img
//       src="https://demo.workdo.io/hrmgo/storage/uploads/logo/logo-dark.png"
//       alt="HRMGo"
//       className="logo logo-sm"
//     />
//   </a>
// </div>
//         <div className="navbar-content">
//           <ul className="dash-navbar">
//             {menuConfig.map((menu) => (
//               <li
//                 key={menu.id}
//                 className={`dash-item dash-hasmenu ${
//                   activeMenu === menu.id ? "active" : ""
//                 }`}
//               >
//                 <a
//                   href={menu.link}
//                   className="dash-link"
//                   onClick={() => toggleMenu(menu.id)}
//                 >
//                   <span className="dash-micon">
//                     <i className={menu.iconClass} />
//                   </span>
//                   <span className="dash-mtext">{menu.label}</span>
//                   {menu.subMenu && (
//                     <span className="dash-arrow">
//                       <IoIosArrowForward />
//                     </span>
//                   )}
//                 </a>
//                 {menu.subMenu &&
//                   activeMenu === menu.id &&
//                   renderSubMenu(menu.subMenu)}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;

// // ================================================

import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const menuConfig = [
  // dashboard
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
            id: "incomeExpense",
            label: "Income Vs Expense",
            link: "https://demo.workdo.io/hrmgo/report/income-expense",
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
    iconClass: "ti ti-user",
    link: "https://demo.workdo.io/hrmgo/employee",
  },

  // pay roll
  {
    id: "payroll",
    label: "Payroll",
    iconClass: "ti ti-users",
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
    iconClass: "ti ti-home",
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
    iconClass: "ti ti-users",
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
    iconClass: "ti ti-users",
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
    iconClass: "ti ti-users",
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
    iconClass: "ti ti-users",
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
    iconClass: "ti ti-license",
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
    iconClass: "ti ti-device-floppy",
    link: "https://demo.workdo.io/hrmgo/contract",
  },

  // Ticket
  {
    id: "ticket",
    label: "Ticket",
    iconClass: "ti ti-ticket",
    link: "https://demo.workdo.io/hrmgo/ticket",
  },

  // Event
  {
    id: "event",
    label: "Event",
    iconClass: "ti ti-calendar-event",
    link: "https://demo.workdo.io/hrmgo/event",
  },

  // Meeting
  {
    id: "meeting",
    label: "Meeting",
    iconClass: "ti ti-calendar-time",
    link: "https://demo.workdo.io/hrmgo/meeting",
  },

  // Zoom Meeting
  {
    id: "zoomMeeting",
    label: "Zoom Meeting",
    iconClass: "ti ti-video",
    link: "https://demo.workdo.io/hrmgo/zoom-meeting",
  },

  // Assets
  {
    id: "assets",
    label: "Assets",
    iconClass: "ti ti-medical-cross",
    link: "https://demo.workdo.io/hrmgo/account-assets",
  },

  // Document
  {
    id: "document",
    label: "Document",
    iconClass: "ti ti-file",
    link: "https://demo.workdo.io/hrmgo/document-upload",
  },

  // Email Templates
  {
    id: "emailTemplates",
    label: "Email Templates",
    iconClass: "ti ti-template",
    link: "https://demo.workdo.io/hrmgo/email_template_lang/1/en",
  },

  // Company Policy
  {
    id: "companyPolicy",
    label: "Company Policy",
    iconClass: "ti ti-pray",
    link: "https://demo.workdo.io/hrmgo/company-policy",
  },

  // Messenger
  {
    id: "messenger",
    label: "Messenger",
    iconClass: "ti ti-messages",
    link: "https://demo.workdo.io/hrmgo/chats",
  },

  // Notification Template
  {
    id: "notificationTemplate",
    label: "Notification Template",
    iconClass: "ti ti-bell",
    link: "https://demo.workdo.io/hrmgo/notification-templates",
  },

  // HRM System Setup
  {
    id: "hrmSystemSetup",
    label: "HRM System Setup",
    iconClass: "ti ti-table",
    link: "https://demo.workdo.io/hrmgo/branch",
  },

  // Landing Page
  {
    id: "landingPage",
    label: "Landing Page",
    iconClass: "ti ti-license",
    link: "https://demo.workdo.io/hrmgo/landingpage",
  },

  // System Setting
  {
    id: "systemSetting",
    label: "System Setting",
    iconClass: "ti ti-settings",
    link: "https://demo.workdo.io/hrmgo/settings",
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
    <nav className="dash-sidebar light-sidebar transprent-bg mob-sidebar-active">
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

        <div className="navbar-content" data-simplebar="init">
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
  );
};

export default Sidebar;

// ================================================
