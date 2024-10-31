import React from "react";

import DashboardMainHeader from "./DashboardMainHeader.js";
import DashboardMetrics from "./DashboardMetrics.js";
import MeetingClockCalender from "./MeetingClockCalender/MeetingClockCalender.js";
import Announcement from "./Announcement.js";

const DashboardMain = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
          <DashboardMainHeader />
          <DashboardMetrics />
          <MeetingClockCalender />
          <Announcement />
        </div>
      </section>
    </>
  );
};

export default DashboardMain;
