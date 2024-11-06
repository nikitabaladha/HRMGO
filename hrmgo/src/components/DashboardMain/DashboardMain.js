import React from "react";

// import DashboardMainHeader from "./DashboardMainHeader.js";
// import DashboardMetrics from "./DashboardMetrics.js";
// import MeetingAttendanceCalender from "./MeetingAttendanceCalender/MeetingAttendanceCalender.js";
// import Announcement from "./Announcement.js";
import OverView from "./Overview/Overview.js";

const DashboardMain = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
          <OverView />
        </div>
      </section>
    </>
  );
};

export default DashboardMain;
