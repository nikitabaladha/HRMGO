import React from "react";

import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header.js";
import DashboardMain from "../DashboardMain/DashboardMain.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <DashboardMain />
      <Footer />
    </>
  );
};

export default Home;
