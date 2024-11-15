import React, { useState } from "react";
import { Link } from "react-router-dom";
import postAPI from "../../../../../api/postAPI.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BulkAttendanceTable = ({ filteredEmployees, date }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleAllAttendance = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attendanceData = filteredEmployees.map((employee) => {
      const clockIn = event.target[`in-${employee.id}`]?.value || "09:00";
      const clockOut = event.target[`out-${employee.id}`]?.value || "18:00";

      // Format clock-in and clock-out as Date objects
      const formattedClockIn = clockIn
        ? new Date(`${date}T${clockIn}:00Z`)
        : new Date(`${date}T09:00:00Z`);
      const formattedClockOut = clockOut
        ? new Date(`${date}T${clockOut}:00Z`)
        : new Date(`${date}T18:00:00Z`);

      // Ideal working hours (9 AM to 6 PM)
      const idealClockIn = new Date(`${date}T09:00:00Z`);
      const idealClockOut = new Date(`${date}T18:00:00Z`);

      // Calculate Late
      let late = 0;
      if (formattedClockIn > idealClockIn) {
        late = formattedClockIn - idealClockIn; // Late time in milliseconds
      }

      // Calculate Early Leaving
      let earlyLeaving = 0;
      if (formattedClockOut < idealClockOut) {
        earlyLeaving = idealClockOut - formattedClockOut; // Early leaving time in milliseconds
      }

      // Calculate Overtime
      let overtime = 0;
      if (formattedClockOut > idealClockOut) {
        overtime = formattedClockOut - idealClockOut; // Overtime in milliseconds
      }

      // Convert late, earlyLeaving, overtime from milliseconds to ISO 8601 string format
      const lateTime = late
        ? new Date(late).toISOString()
        : "1970-01-01T00:00:00Z";
      const earlyLeavingTime = earlyLeaving
        ? new Date(earlyLeaving).toISOString()
        : "1970-01-01T00:00:00Z";
      const overtimeTime = overtime
        ? new Date(overtime).toISOString()
        : "1970-01-01T00:00:00Z";

      return {
        employeeId: employee._id,
        date, // Use the date prop directly here
        status: isChecked ? "Present" : "Absent",
        clockIn: formattedClockIn.toISOString(),
        clockOut: formattedClockOut.toISOString(),
        late: lateTime,
        earlyLeaving: earlyLeavingTime,
        overtime: overtimeTime,
      };
    });

    try {
      const response = await postAPI(
        "/marked-attendance",
        attendanceData,
        true
      );
      console.log("Attendance data saved:", response.data);
      toast.success("Employee attendance successfully created!");
    } catch (error) {
      console.error("Error saving attendance data:", error);
    }
  };

  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header card-body table-border-style">
          <form onSubmit={handleSubmit}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th width="10%">Employee Id</th>
                    <th>Employee</th>
                    <th>Branch</th>
                    <th>Department</th>
                    <th>
                      <div className="form-group my-auto">
                        <div className="custom-control">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="present_all"
                            id="present_all"
                            checked={isChecked}
                            onChange={handleToggleAllAttendance}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="present_all"
                          >
                            Attendance
                          </label>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="Id">
                        <input
                          type="hidden"
                          name="employee_id[]"
                          value={employee.id}
                        />
                        <Link to="" className="btn btn-outline-primary">
                          {employee.id}
                        </Link>
                      </td>
                      <td>{employee.name}</td>
                      <td>{employee.branchName}</td>
                      <td>{employee.departmentName}</td>
                      <td>
                        <div className="row">
                          <div className="col-md-1">
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="form-check-input present"
                                  type="checkbox"
                                  name={`present-${employee.id}`}
                                  id={`present${employee.id}`}
                                  checked={isChecked}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`present${employee.id}`}
                                ></label>
                              </div>
                            </div>
                          </div>

                          {/* Check if attendance is already available */}

                          {employee.attendance ? (
                            <div className="col-md-8">
                              <div className="row">
                                <label className="col-md-2 control-label">
                                  In
                                </label>
                                <div className="col-md-4">
                                  <input
                                    type="time"
                                    className="form-control"
                                    name={`in-${employee.id}`}
                                    value={
                                      // If clockIn exists, convert the UTC time from the backend to local time
                                      employee.attendance.clockIn
                                        ? new Date(
                                            new Date(
                                              employee.attendance.clockIn
                                            ).toLocaleString("en-US", {
                                              timeZone: "UTC",
                                            })
                                          ).toLocaleTimeString("en-GB", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: false, // 24-hour format
                                          })
                                        : "09:00" // Default to 09:00 if no clockIn data is present
                                    }
                                    // readOnly
                                  />
                                </div>
                                <label
                                  htmlFor="inputValue"
                                  className="col-md-2 control-label"
                                >
                                  Out
                                </label>
                                <div className="col-md-4">
                                  <input
                                    type="time"
                                    className="form-control"
                                    name={`out-${employee.id}`}
                                    value={
                                      // If clockOut exists, convert the UTC time from the backend to local time
                                      employee.attendance.clockOut
                                        ? new Date(
                                            new Date(
                                              employee.attendance.clockOut
                                            ).toLocaleString("en-US", {
                                              timeZone: "UTC",
                                            })
                                          ).toLocaleTimeString("en-GB", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: false, // 24-hour format
                                          })
                                        : "18:00" // Default to 18:00 if no clockOut data is present
                                    }
                                    // readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`col-md-8 present_check_in ${
                                isChecked ? "" : "d-none"
                              }`}
                            >
                              <div className="row">
                                <label className="col-md-2 control-label">
                                  In
                                </label>
                                <div className="col-md-4">
                                  <input
                                    type="time"
                                    className="form-control timepicker"
                                    name={`in-${employee.id}`}
                                    defaultValue="09:00" // Default time when no attendance data
                                  />
                                </div>
                                <label
                                  htmlFor="inputValue"
                                  className="col-md-2 control-label"
                                >
                                  Out
                                </label>
                                <div className="col-md-4">
                                  <input
                                    type="time"
                                    className="form-control timepicker"
                                    name={`out-${employee.id}`}
                                    defaultValue="18:00" // Default time when no attendance data
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="attendance-btn float-end pt-4">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BulkAttendanceTable;
