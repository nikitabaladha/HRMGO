import React from "react";

import DashboardMainHeader from "./DashboardMainHeader.js";
import DashboardMetrics from "./DashboardMetrics.js";
import MeetingClockCalender from "./MeetingClockCalender/MeetingClockCalender.js";

const DashboardMain = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
          <DashboardMainHeader />
          <DashboardMetrics />
          <MeetingClockCalender />
        </div>
      </section>
    </>
  );
};

export default DashboardMain;
