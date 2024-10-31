import React from "react";

const Clock = () => {
  // Data for each absent employee
  const absentEmployees = [
    { name: "Julie Lynn", status: "Absent" },
    { name: "Lunea Todd", status: "Absent" },
    { name: "Ida F. Mullen", status: "Absent" },
    { name: "Teresa R McRae", status: "Absent" },
    { name: "Joel O Dolan", status: "Absent" },
    { name: "Jeremy Holmes", status: "Absent" },
    { name: "Anjolie Mayer", status: "Absent" },
    { name: "Nyssa Sloan", status: "Absent" },
    { name: "Jillian Sykes", status: "Absent" },
    { name: "Aida Bugg", status: "Absent" },
    { name: "Mona Hendricks", status: "Absent" },
    { name: "Kyle Willis", status: "Absent" },
    { name: "Abra Stevens", status: "Absent" },
  ];

  return (
    <>
      <div className="card">
        <div className="card-header card-body table-border-style">
          <h5>Today's Not Clock In</h5>
        </div>
        <div className="card-body" style={{ height: 324, overflow: "auto" }}>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="list">
                {absentEmployees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.name}</td>
                    <td>
                      <span className="absent-btn">{employee.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
