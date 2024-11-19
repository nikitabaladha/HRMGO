import React from "react";

const AttendanceTable = ({ attendanceData }) => {
  const totalDaysInMonth = 30; // Adjust this value for months with fewer days

  // Ensure attendanceData is an array
  const employees = Array.isArray(attendanceData)
    ? attendanceData
    : [attendanceData].filter(Boolean);

  return (
    <div className="col">
      <div className="card">
        <div className="card-body table-border-style">
          <div className="table-responsive py-4 attendance-table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="active">Name</th>
                  {/* Dynamically generate table headers for dates */}
                  {Array.from({ length: totalDaysInMonth }, (_, index) => (
                    <th key={index}>{String(index + 1).padStart(2, "0")}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Map through each employee to generate rows */}
                {employees.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeName}</td>
                    {/* Generate attendance cells for each day */}
                    {Array.from({ length: totalDaysInMonth }, (_, index) => {
                      // Find attendance for the current date
                      const dateString = `Nov ${String(index + 1).padStart(
                        2,
                        "0"
                      )}, 2024`; // Replace "Nov" and "2024" with dynamic values as needed
                      const attendanceRecord = employee.attendance.find(
                        (record) => record.date === dateString
                      );

                      return (
                        <td key={index}>
                          {attendanceRecord?.status === "Present" ? (
                            <i className="badge bg-success p-2">P</i>
                          ) : (
                            ""
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
