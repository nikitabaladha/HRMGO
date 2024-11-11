import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import { TbPencil, TbCaretRight } from "react-icons/tb";

const leaveData = [
  {
    id: 1,
    employeeName: "Julie Lynn",
    leaveType: "Casual Leave",
    appliedOn: "Mar 4, 2023",
    startDate: "Mar 3, 2023",
    endDate: "Mar 5, 2023",
    totalDays: 3,
    reason: "Lorem Ipsum, Or Lipsum",
    status: "Reject",
    statusColor: "danger",
  },
  {
    id: 2,
    employeeName: "Lunea Todd",
    leaveType: "Medical Leave",
    appliedOn: "Mar 4, 2023",
    startDate: "Mar 3, 2023",
    endDate: "Mar 7, 2023",
    totalDays: 5,
    reason: "Lorem Ipsum, Or Lipsum",
    status: "Approved",
    statusColor: "success",
  },
  {
    id: 3,
    employeeName: "Julie Lynn",
    leaveType: "Casual Leave",
    appliedOn: "Mar 4, 2023",
    startDate: "Mar 17, 2023",
    endDate: "Mar 19, 2023",
    totalDays: 3,
    reason: "Lorem Ipsum, Or Lipsum",
    status: "Pending",
    statusColor: "warning",
  },
];

const ManageLeaveTable = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <div className="table-responsive">
              <table className="table" id="pc-dt-simple">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>Applied On</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Days</th>
                    <th>Leave Reason</th>
                    <th>Status</th>
                    <th width="200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveData.map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.employeeName}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.appliedOn}</td>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.totalDays}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <div
                          className={`badge bg-${leave.statusColor} p-2 px-3 rounded status-badge5`}
                        >
                          {leave.status}
                        </div>
                      </td>
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-success ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm align-items-center"
                              data-size="lg"
                              data-url={`/leave/${leave.id}`}
                              data-ajax-popup="true"
                              data-bs-toggle="tooltip"
                              title="Manage Leave"
                            >
                              <TbCaretRight className="text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm align-items-center"
                              data-size="lg"
                              data-url={`/leave/${leave.id}`}
                              data-ajax-popup="true"
                              data-bs-toggle="tooltip"
                              title="Edit Leave"
                            >
                              <TbPencil className="text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action={`/leave/${leave.id}`}
                              acceptCharset="UTF-8"
                              id={`delete-form-${leave.id}`}
                            >
                              <input
                                name="_method"
                                type="hidden"
                                value="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                value={leave.token}
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title="Delete"
                                aria-label="Delete"
                              >
                                <HiOutlineTrash className="text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLeaveTable;
