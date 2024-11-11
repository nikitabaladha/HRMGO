// components/DashboardMain/Overview/Overview.js

import React from "react";

import ManageLeaveHeader from "./ManageLeaveHeader";
import ManageLeaveTable from "./ManageLeaveTable";

const ManageLeave = () => {
  return (
    <>
      <ManageLeaveHeader />
      <ManageLeaveTable />
    </>
  );
};

export default ManageLeave;
