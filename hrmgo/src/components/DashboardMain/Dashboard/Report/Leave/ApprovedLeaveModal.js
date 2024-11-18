import React from "react";

const ApprovedLeaveModal = ({ employee, onClose }) => {
  console.log("Employee Data", employee);
  //    {
  //     "employeeId": "EMP0000001",
  //     "employeeName": "Ketan Gadhiya",
  //     "branchName": "Canada",
  //     "departmentName": "Financial",
  //     "startDate": "Sep 25, 2024",
  //     "endDate": "Sep 26, 2024",
  //     "totalDays": 2,
  //     "leaveType": "Medical Leave",
  //     "reason": "Fever.",
  //     "status": "Approved"
  // }
  console.log("Approved Leave Details:", employee.approvedLeaveDetails); //undefined;
  const approvedLeaveDetails = employee?.approvedLeaveDetails || [];

  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Approved Leave Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="body">
              <div className="col-form-label">
                <div className="row m-2">
                  <div className="col text-center">
                    <div className="card p-4 mb-4">
                      <h5 className="report-text gray-text mb-0">
                        Casual Leave :
                      </h5>
                      <h5 className="report-text mb-0">
                        {employee.casualLeave || 0}
                      </h5>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="card p-4 mb-4">
                      <h5 className="report-text gray-text mb-0">
                        Medical Leave :
                      </h5>
                      <h5 className="report-text mb-0">
                        {employee.medicalLeave || 0}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="table-responsive">
                    <table className="table" id="pc-dt-simple">
                      <thead>
                        <tr>
                          <th>Leave Type</th>
                          <th>Leave Date</th>
                          <th>Leave Days</th>
                          <th>Leave Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{employee?.leaveType}</td>
                          <td>
                            {employee?.startDate} to {employee?.endDate}
                          </td>
                          <td>{employee?.totalDays}</td>
                          <td>{employee?.reason}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedLeaveModal;
