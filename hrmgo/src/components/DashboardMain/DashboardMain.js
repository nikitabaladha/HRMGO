import React from "react";

import DashboardMainHeader from "./DashboardMainHeader.js";
import DashboardMetrics from "./DashboardMetrics.js";
import MeetingAttendanceCalender from "./MeetingAttendanceCalender/MeetingAttendanceCalender.js";
import Announcement from "./Announcement.js";

const DashboardMain = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
          <DashboardMainHeader />
          <DashboardMetrics />
          <MeetingAttendanceCalender />
          <Announcement />
        </div>
      </section>
    </>
  );
};

export default DashboardMain;
