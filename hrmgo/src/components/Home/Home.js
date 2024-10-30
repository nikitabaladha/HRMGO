import React from "react";

import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header.js";
import DashboardMetrics from "../DashboardMetrics/DashboardMetrics.js";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <DashboardMetrics />
    </>
  );
};

export default Home;
