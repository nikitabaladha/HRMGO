import React from "react";
import BulkAttendanceHeader from "./BulkAttendanceHeader";
import BulkAttendanceTable from "./BulkAttendanceTable";
import BulkAttendanceSearchForm from "./BulkAttendanceSearchForm";

const BulkAttendance = () => {
  return (
    <>
      <BulkAttendanceHeader />
      <div className="row">
        <BulkAttendanceSearchForm />
        <BulkAttendanceTable />
      </div>
    </>
  );
};

export default BulkAttendance;
