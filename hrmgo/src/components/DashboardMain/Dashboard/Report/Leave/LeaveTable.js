import React from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: "#EMP0000001",
    name: "Julie Lynn",
    approvedLeaves: 1,
    rejectedLeaves: 1,
    pendingLeaves: 2,
  },
  {
    id: "#EMP0000002",
    name: "Lunea Todd",
    approvedLeaves: 1,
    rejectedLeaves: 0,
    pendingLeaves: 1,
  },
  {
    id: "#EMP0000003",
    name: "Ida F. Mullen",
    approvedLeaves: 0,
    rejectedLeaves: 1,
    pendingLeaves: 0,
  },
  {
    id: "#EMP0000001",
    name: "Julie Lynn",
    approvedLeaves: 1,
    rejectedLeaves: 1,
    pendingLeaves: 2,
  },
  {
    id: "#EMP0000002",
    name: "Lunea Todd",
    approvedLeaves: 1,
    rejectedLeaves: 0,
    pendingLeaves: 1,
  },
  {
    id: "#EMP0000003",
    name: "Ida F. Mullen",
    approvedLeaves: 0,
    rejectedLeaves: 1,
    pendingLeaves: 0,
  },
  {
    id: "#EMP0000001",
    name: "Julie Lynn",
    approvedLeaves: 1,
    rejectedLeaves: 1,
    pendingLeaves: 2,
  },
  {
    id: "#EMP0000002",
    name: "Lunea Todd",
    approvedLeaves: 1,
    rejectedLeaves: 0,
    pendingLeaves: 1,
  },
  {
    id: "#EMP0000003",
    name: "Ida F. Mullen",
    approvedLeaves: 0,
    rejectedLeaves: 1,
    pendingLeaves: 0,
  },
];

const LeaveTable = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <div className="table-responsive">
              <table className="table" id="pc-dt-simple">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee</th>
                    <th>Approved Leaves</th>
                    <th>Rejected Leaves</th>
                    <th>Pending Leaves</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <Link to="" className="btn btn-outline-primary">
                          {employee.id}
                        </Link>
                      </td>
                      <td>{employee.name}</td>
                      <td>
                        <div className="btn btn-sm btn-info rounded">
                          {employee.approvedLeaves}
                          <Link
                            to="#"
                            className="text-white"
                            data-url={`https://demo.workdo.io/hrmgo/employee/${
                              index + 1
                            }/leave/Approved/no/2024-11/2024`}
                            data-ajax-popup="true"
                            data-size="lg"
                            data-title="Approved Leave Detail"
                            data-bs-toggle="tooltip"
                            title="View"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="btn btn-sm btn-danger rounded">
                          {employee.rejectedLeaves}
                          <Link
                            to="#"
                            className="text-white"
                            data-url={`https://demo.workdo.io/hrmgo/employee/${
                              index + 1
                            }/leave/Reject/no/2024-11/2024`}
                            data-size="lg"
                            data-ajax-popup="true"
                            data-title="Rejected Leave Detail"
                            data-bs-toggle="tooltip"
                            title="View"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="m-view-btn btn btn-sm btn-warning rounded">
                          {employee.pendingLeaves}
                          <Link
                            to="#"
                            className="text-white"
                            data-url={`https://demo.workdo.io/hrmgo/employee/${
                              index + 1
                            }/leave/Pending/no/2024-11/2024`}
                            data-size="lg"
                            data-ajax-popup="true"
                            data-title="Pending Leave Detail"
                            data-bs-toggle="tooltip"
                            title="View"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveTable;
