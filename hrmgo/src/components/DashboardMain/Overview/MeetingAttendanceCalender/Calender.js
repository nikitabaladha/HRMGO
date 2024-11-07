import React, { useEffect, useState } from "react";
import getAPI from "../../../../api/getAPI.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [calendars, setCalendars] = useState([]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth();
    const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await getAPI(`/Calendar-get-all`, {}, true);
        if (
          !response.hasError &&
          response.data &&
          Array.isArray(response.data.data)
        ) {
          // Transform data to match FullCalendar's expected format
          const formattedEvents = response.data.data.map((event) => ({
            title: event.title,
            start: formatDate(event.startDate),
            end: formatDate(event.endDate),
            id: event._id,
          }));
          setCalendars(formattedEvents);
          console.log("Calendars fetched successfully", formattedEvents);
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching Calendars:", err);
      }
    };

    fetchCalendar();
  }, []);

  return (
    <>
      <div className="col-xl-7">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-lg-6">
                <h5>Calendar</h5>
              </div>
              <div className="col-lg-6">
                <select
                  className="form-control"
                  name="calender_type"
                  id="calender_type"
                  style={{ float: "right", width: 155 }}
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
                  events={calendars}
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

export default Calendar;
