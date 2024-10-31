import React from "react";

const Calender = () => {
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
                <div id="calendar" className="calendar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
