import React from "react";
import MarkedAttendanceHeader from "./MarkedAttendanceHeader";
import MarkedAttendanceTable from "./MarkedAttendanceTable";
import MarkedAttendanceSearchForm from "./MarkedAttendanceSearchForm";

const MarkedAttendance = () => {
  return (
    <>
      <MarkedAttendanceHeader />
      <div className="row">
        <MarkedAttendanceSearchForm />
        <MarkedAttendanceTable />
      </div>
    </>
  );
};

export default MarkedAttendance;
