import React from "react";

import Meeting from "./Meeting";
import Clock from "./Clock";
import Calender from "./Calender";

const MeetingClockCalender = () => {
  return (
    <>
      <div className="col-xxl-12">
        <div className="row">
          <div className="col-xl-5">
            {/* Meeting schedule */}
            <Meeting />

            {/* Today Not Clock In */}
            <Clock />
          </div>

          {/* Calender */}
          <Calender />
        </div>
      </div>
    </>
  );
};

export default MeetingClockCalender;
