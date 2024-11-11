import React, { useEffect, useState } from "react";
import getAPI from "../../../../api/getAPI.js";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import { TbPencil, TbCaretRight } from "react-icons/tb";

const ManageLeaveTable = () => {
  const [leaveData, setLeaveData] = useState([]);

  const statusColor = [
    {
      status: "Reject",
      statusColor: "danger", // Red for Reject
    },
    {
      status: "Approved",
      statusColor: "success", // Green for Approved
    },
    {
      status: "Pending",
      statusColor: "warning", // Yellow for Pending
    },
  ];

  useEffect(() => {
    const fetchMangeLeaveData = async () => {
      try {
        const response = await getAPI(`/manage-leave-get-all`, {}, true);
        if (
          !response.hasError &&
          response.data &&
          Array.isArray(response.data.data)
        ) {
          setLeaveData(response.data.data);
          console.log("Leave Data fetched successfully", response.data.data);
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching leave Data:", err);
      }
    };

    fetchMangeLeaveData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    console.log(date.toLocaleDateString("en-US", options));
    return date.toLocaleDateString("en-US", options);
  }

  function getStatusColor(status) {
    const statusObj = statusColor.find((item) => item.status === status);
    return statusObj ? statusObj.statusColor : "secondary";
  }

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
                      <td>{formatDate(leave.appliedOn)}</td>
                      <td>{formatDate(leave.startDate)}</td>
                      <td>{formatDate(leave.endDate)}</td>
                      <td>{leave.totalDays}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <div
                          className={`badge bg-${getStatusColor(
                            leave.status
                          )} p-2 px-3 rounded status-badge5`}
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
