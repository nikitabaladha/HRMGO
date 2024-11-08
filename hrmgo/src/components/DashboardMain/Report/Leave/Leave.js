//components/DashboardMain/Report/Leave/Leave.js

import LeaveHeader from "./LeaveHeader";
import LeaveTable from "./LeaveTable";
import LeaveSearchForm from "./LeaveSearchForm";
import LeaveReport from "./LeaveReport";

import React from "react";

const Leave = () => {
  return (
    <>
      <LeaveHeader />
      <div class="row">
        <LeaveSearchForm />
        <LeaveReport />
        <LeaveTable />
      </div>
    </>
  );
};

export default Leave;
