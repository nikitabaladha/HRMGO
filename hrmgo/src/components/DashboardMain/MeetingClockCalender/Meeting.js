import React from "react";

const Meeting = () => {
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
                <tr>
                  <td>New Technology</td>
                  <td>Oct 2, 2023</td>
                  <td>3:20 PM</td>
                </tr>
                <tr>
                  <td>Team Meeting</td>
                  <td>Sep 6, 2022</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Event Related</td>
                  <td>Dec 11, 2023</td>
                  <td>2:25 PM</td>
                </tr>
                <tr>
                  <td>Company Rules</td>
                  <td>Nov 18, 2023</td>
                  <td>4:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meeting;
