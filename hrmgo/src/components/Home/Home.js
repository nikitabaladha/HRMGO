import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header.js";
import DashboardMain from "../DashboardMain/DashboardMain.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      const fullName = `${userDetails.firstName} ${userDetails.lastName}`;
      toast.success(`Welcome, ${fullName}`);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <DashboardMain />
      <Footer />
    </>
  );
};

export default Home;
