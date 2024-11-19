//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React from "react";
import { useState } from "react";
import MonthlyAttendanceHeader from "./MonthlyAttendanceHeader";
import MonthlyAttendanceSearchForm from "./MonthlyAttendanceSearchForm";
import AttendanceReport from "./AttendanceReport";
import AttendanceTable from "./AttendanceTable";

const MonthlyAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const handleDataFetched = (data) => {
    setAttendanceData(data);
    console.log("Fetched attendance data in parent:", data);
  };
  return (
    <>
      <MonthlyAttendanceHeader />
      <div class="row">
        <MonthlyAttendanceSearchForm onDataFetched={handleDataFetched} />
        <AttendanceReport />
        <AttendanceTable attendanceData={attendanceData} />
      </div>
    </>
  );
};

export default MonthlyAttendance;
