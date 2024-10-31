import React from "react";

const Announcement = () => {
  return (
    <>
      {/* Announcement list start*/}
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <h5>Announcement List</h5>
          </div>
          <div className="card-body" style={{ height: 270, overflow: "auto" }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className="list">
                  <tr>
                    <td>Magnam est ducimus</td>
                    <td>Sep 25, 2024</td>
                    <td>Sep 25, 2024</td>
                    <td>At est quasi saepe p</td>
                  </tr>
                  <tr>
                    <td>Magnam est ducimus</td>
                    <td>Nov 25, 2022</td>
                    <td>Nov 26, 2022</td>
                    <td>At est quasi saepe p</td>
                  </tr>
                  <tr>
                    <td>Project Meeting</td>
                    <td>Mar 10, 2023</td>
                    <td>Mar 26, 2023</td>
                    <td>Lorem Ipsum, Or Lipsum</td>
                  </tr>
                  <tr>
                    <td>Team Meeting</td>
                    <td>Dec 4, 2023</td>
                    <td>Dec 5, 2023</td>
                    <td>Lorem Ipsum, Or Lipsum</td>
                  </tr>
                  <tr>
                    <td>Event Related</td>
                    <td>Oct 4, 2023</td>
                    <td>Oct 5, 2023</td>
                    <td>Lorem Ipsum, Or Lipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Announcement list end*/}
    </>
  );
};

export default Announcement;
