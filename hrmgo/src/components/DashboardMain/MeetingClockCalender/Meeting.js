import React from "react";

const Meeting = () => {
  // Data for each meeting
  const meetings = [
    { title: "New Technology", date: "Oct 2, 2023", time: "3:20 PM" },
    { title: "Team Meeting", date: "Sep 6, 2022", time: "5:00 PM" },
    { title: "Event Related", date: "Dec 11, 2023", time: "2:25 PM" },
    { title: "Company Rules", date: "Nov 18, 2023", time: "4:30 PM" },
  ];

  return (
    <>
      <div className="card">
        <div className="card-header card-body table-border-style">
          <h5>Meeting schedule</h5>
        </div>
        <div className="card-body" style={{ height: 324, overflow: "auto" }}>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="list">
                {meetings.map((meeting, index) => (
                  <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.date}</td>
                    <td>{meeting.time}</td>
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

export default Meeting;
