import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header.js";
import DashboardMain from "../DashboardMain/DashboardMain.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <DashboardMain />
      <Footer />
    </>
  );
};

export default Home;
