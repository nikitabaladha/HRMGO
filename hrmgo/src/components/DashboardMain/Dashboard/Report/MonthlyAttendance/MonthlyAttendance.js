// //components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

// import React from "react";
// import { useState } from "react";
// import MonthlyAttendanceHeader from "./MonthlyAttendanceHeader";
// import MonthlyAttendanceSearchForm from "./MonthlyAttendanceSearchForm";
// import AttendanceReport from "./AttendanceReport";
// import AttendanceTable from "./AttendanceTable";

// const MonthlyAttendance = () => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   const handleDataFetched = (data) => {
//     setAttendanceData(data);
//     console.log("Fetched attendance data in parent:", data);
//   };
//   return (
//     <>
//       <MonthlyAttendanceHeader />
//       <div class="row">
//         <MonthlyAttendanceSearchForm onDataFetched={handleDataFetched} />
//         <AttendanceReport />
//         <AttendanceTable attendanceData={attendanceData} />
//       </div>
//     </>
//   );
// };

// export default MonthlyAttendance;

import React, { useState } from "react";
import MonthlyAttendanceHeader from "./MonthlyAttendanceHeader";
import MonthlyAttendanceSearchForm from "./MonthlyAttendanceSearchForm";
import AttendanceReport from "./AttendanceReport";
import AttendanceTable from "./AttendanceTable";

const MonthlyAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedMonthYear, setSelectedMonthYear] = useState(""); // Add state for monthYear

  const handleDataFetched = (data, monthYear) => {
    setAttendanceData(data);
    setSelectedMonthYear(monthYear); // Capture the selected monthYear
    console.log("Fetched attendance data:", data, "Month-Year:", monthYear);
  };

  return (
    <>
      <MonthlyAttendanceHeader />
      <div className="row">
        <MonthlyAttendanceSearchForm onDataFetched={handleDataFetched} />
        <AttendanceReport />
        <AttendanceTable
          attendanceData={attendanceData}
          selectedMonthYear={selectedMonthYear} // Pass monthYear to AttendanceTable
        />
      </div>
    </>
  );
};

export default MonthlyAttendance;
