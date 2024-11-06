import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header.js";
import DashboardMain from "../DashboardMain/DashboardMain.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [fullName, setFullName] = useState("");

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      const userFullName = `${userDetails.firstName} ${userDetails.lastName}`;
      setFullName(userFullName);
      toast.success(`Welcome, ${userFullName}`);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} fullName={fullName} />
      <DashboardMain />
      <Footer />
    </>
  );
};

export default Home;
