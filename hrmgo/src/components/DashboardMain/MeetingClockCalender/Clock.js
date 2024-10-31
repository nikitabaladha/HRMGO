import React from "react";

const Clock = () => {
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
                <tr>
                  <td>Julie Lynn</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Lunea Todd</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Ida F. Mullen</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Teresa R McRae</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Joel O Dolan</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Ida F. Mullen</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Jeremy Holmes</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Anjolie Mayer</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Nyssa Sloan</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Jillian Sykes</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Aida Bugg</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Mona Hendricks</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Kyle Willis</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
                <tr>
                  <td>Abra Stevens</td>
                  <td>
                    <span className="absent-btn">Absent</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
