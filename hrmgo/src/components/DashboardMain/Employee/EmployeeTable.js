import React from "react";
import { Link } from "react-router-dom";
import { TbPencil } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";

// Sample dynamic data structure for employees
const employeeData = [
  {
    id: "EMP0000001",
    name: "Julie Lynn",
    email: "IsidroTJohnson@armyspy.com",
    branch: "China",
    department: "Industrials",
    designation: "Manager",
    joiningDate: "Mar 4, 2020",
  },
  {
    id: "EMP0000002",
    name: "Lunea Todd",
    email: "protiong@teleworm.us",
    branch: "China",
    department: "Health care",
    designation: "CEO",
    joiningDate: "Mar 4, 2020",
  },
  {
    id: "EMP0000003",
    name: "Ida F. Mullen",
    email: "Idafmullen@armyspy.com",
    branch: "India",
    department: "Telecommunications",
    designation: "Telecom Specialist",
    joiningDate: "Mar 4, 2020",
  },
  // Add more employees here as needed
];

const EmployeeTable = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header card-body table-border-style">
              <div className="table-responsive">
                <table className="table" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Branch</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Date Of Joining</th>
                      <th width="200px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.map((employee, index) => (
                      <tr key={employee.id}>
                        <td>
                          <Link className="btn btn-outline-primary" to="">
                            #{employee.id}
                          </Link>
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.branch}</td>
                        <td>{employee.department}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.joiningDate}</td>
                        <td className="Action">
                          <span>
                            <div className="action-btn bg-info ms-2">
                              <Link
                                to=""
                                className="mx-3 btn btn-sm align-items-center"
                                data-bs-toggle="tooltip"
                                title="Edit"
                              >
                                <TbPencil className="text-white" />
                              </Link>
                            </div>
                            <div className="action-btn bg-danger ms-2">
                              <form
                                method="POST"
                                action={`https://demo.workdo.io/hrmgo/employee/${
                                  index + 1
                                }`}
                                acceptCharset="UTF-8"
                                id={`delete-form-${index + 1}`}
                              >
                                <input
                                  name="_method"
                                  type="hidden"
                                  defaultValue="DELETE"
                                />
                                <input
                                  name="_token"
                                  type="hidden"
                                  defaultValue="1VeqiEqyagA6XjCZr049aILUNogdAGa44buw9sQP"
                                />
                                <Link
                                  to="/"
                                  className="mx-3 btn btn-sm align-items-center bs-pass-para"
                                  data-bs-toggle="tooltip"
                                  title="Delete"
                                  aria-label="Delete"
                                >
                                  <FaRegTrashAlt className="text-white" />
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
    </>
  );
};

export default EmployeeTable;
