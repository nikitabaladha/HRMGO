// components/DashboardMain/Overview/Overview.js

import React from "react";

import TimeSheetHeader from "./TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable";
import TimeSheetSearchForm from "./TimeSheetSearchForm";

const TimeSheet = () => {
  return (
    <>
      <TimeSheetHeader />
      <div className="row">
        <TimeSheetSearchForm />
        <TimeSheetTable />
      </div>
    </>
  );
};

export default TimeSheet;
