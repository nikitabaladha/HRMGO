// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import ApprovedLeaveModal from "./ApprovedLeaveModal";

// const LeaveTable = ({ leaveData }) => {
//   console.log("leavedata", leaveData);
//   const [isApprovedLeaveModalOpen, setIsApprovedLeaveModalOpen] =
//     useState(false);

//   const handleOpenApprovedLeaveModal = () => {
//     setIsApprovedLeaveModalOpen(true); // Open the delete dialog
//   };

//   return (
//     <>
//       <div>leaveData</div>
//       <div className="col-xl-12">
//         <div className="card">
//           <div className="card-header card-body table-border-style">
//             <div className="table-responsive">
//               <table className="table" id="pc-dt-simple">
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>Employee</th>
//                     <th>Approved Leaves</th>
//                     <th>Rejected Leaves</th>
//                     <th>Pending Leaves</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {leaveData.map((employee, index) => (
//                     <tr key={index}>
//                       <td>
//                         <Link to="" className="btn btn-outline-primary">
//                           {employee.employeeId}
//                         </Link>
//                       </td>
//                       <td>{employee.employeeName}</td>
//                       <td>
//                         <div className="btn btn-sm btn-info rounded">
//                           {employee.approvedLeaves}
//                           <Link
//                             className="text-white"
//                             data-ajax-popup="true"
//                             data-size="lg"
//                             data-title="Approved Leave Detail"
//                             data-bs-toggle="tooltip"
//                             title="View"
//                             onClick={() => {
//                               setIsApprovedLeaveModalOpen(true);
//                             }}
//                           >
//                             View
//                           </Link>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="btn btn-sm btn-danger rounded">
//                           {employee.rejectedLeaves}
//                           <Link
//                             className="text-white"
//                             data-size="lg"
//                             data-ajax-popup="true"
//                             data-title="Rejected Leave Detail"
//                             data-bs-toggle="tooltip"
//                             title="View"
//                           >
//                             View
//                           </Link>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="m-view-btn btn btn-sm btn-warning rounded">
//                           {employee.pendingLeaves}
//                           <Link
//                             className="text-white"
//                             data-size="lg"
//                             data-ajax-popup="true"
//                             data-title="Pending Leave Detail"
//                             data-bs-toggle="tooltip"
//                             title="View"
//                           >
//                             View
//                           </Link>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Update Modal */}
//       {isApprovedLeaveModalOpen && (
//         <ApprovedLeaveModal
//           onClose={() => setIsApprovedLeaveModalOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default LeaveTable;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApprovedLeaveModal from "./ApprovedLeaveModal";

const LeaveTable = ({ leaveData }) => {
  const [isApprovedLeaveModalOpen, setIsApprovedLeaveModalOpen] =
    useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenApprovedLeaveModal = (employee) => {
    setSelectedEmployee(employee); // Set selected employee data
    setIsApprovedLeaveModalOpen(true); // Open the modal
  };

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
                  {leaveData.map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <Link to="#" className="btn btn-outline-primary">
                          {employee.employeeId}
                        </Link>
                      </td>
                      <td>{employee.employeeName}</td>
                      <td>
                        <div className="btn btn-sm btn-info rounded">
                          {employee.approvedLeaves}
                          <Link
                            className="text-white"
                            onClick={() =>
                              handleOpenApprovedLeaveModal(employee)
                            } // Pass employee to the modal
                          >
                            View
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="btn btn-sm btn-danger rounded">
                          {employee.rejectedLeaves}
                          <Link className="text-white">View</Link>
                        </div>
                      </td>
                      <td>
                        <div className="m-view-btn btn btn-sm btn-warning rounded">
                          {employee.pendingLeaves}
                          <Link className="text-white">View</Link>
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

      {/* Update Modal */}
      {isApprovedLeaveModalOpen && selectedEmployee && (
        <ApprovedLeaveModal
          employee={selectedEmployee} // Pass selected employee data as prop
          onClose={() => setIsApprovedLeaveModalOpen(false)} // Close modal
        />
      )}
    </>
  );
};

export default LeaveTable;
