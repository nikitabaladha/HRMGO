import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = () => {
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-10-01" },
    { title: "Event 2", date: "2024-10-02" },
  ]);

  const handleDateClick = (arg) => {
    alert("Date: " + arg.dateStr);
  };
  return (
    <>
      {/* Calender */}
      <div className="col-xl-7">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-lg-6">
                <h5>Calendar</h5>
                <input
                  type="hidden"
                  id="path_admin"
                  defaultValue="https://demo.workdo.io/hrmgo"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="" />
                <select
                  className="form-control"
                  name="calender_type"
                  id="calender_type"
                  style={{ float: "right", width: 155 }}
                  onchange="get_data()"
                >
                  <option value="google_calender">Google Calendar</option>
                  <option value="local_calender" selected="true">
                    Local Calendar
                  </option>
                </select>
              </div>
              <div className="card-body">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  events={events}
                  dateClick={handleDateClick}
                  buttonText={{
                    today: "Today",
                    month: "Month",
                    week: "Week",
                    day: "Day",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
