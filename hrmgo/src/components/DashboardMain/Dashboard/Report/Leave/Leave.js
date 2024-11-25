import LeaveHeader from "./LeaveHeader";
import LeaveTable from "./LeaveTable";
import LeaveSearchForm from "./LeaveSearchForm";
import LeaveReport from "./LeaveReport";
import React, { useState } from "react";

const Leave = () => {
  const [leaveData, setLeaveData] = useState([]);

  const handleDataFetched = (data) => {
    setLeaveData(data);
    console.log("Fetched leave data in parent:", data);
  };
  return (
    <>
      <LeaveHeader />
      <div class="row">
        <LeaveSearchForm onDataFetched={handleDataFetched} />
        <LeaveReport />
        <LeaveTable leaveData={leaveData} />
      </div>
    </>
  );
};

export default Leave;
