import React, { useState } from "react";
import BulkAttendanceHeader from "./BulkAttendanceHeader";
import BulkAttendanceTable from "./BulkAttendanceTable";
import BulkAttendanceSearchForm from "./BulkAttendanceSearchForm";

const BulkAttendance = () => {
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleDataFetched = (data) => {
    setFilteredEmployees(data);
  };
  return (
    <>
      <BulkAttendanceHeader />
      <div className="row">
        <BulkAttendanceSearchForm onDataFetched={handleDataFetched} />
        <BulkAttendanceTable filteredEmployees={filteredEmployees} />
      </div>
    </>
  );
};

export default BulkAttendance;
