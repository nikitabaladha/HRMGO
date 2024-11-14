import React from "react";

import { Link } from "react-router-dom";

const BulkAttendanceTable = ({ filteredEmployees }) => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header card-body table-border-style">
          <form method="POST" acceptCharset="UTF-8">
            <input
              name="_token"
              type="hidden"
              defaultValue="0q4gk02jIhva7fXCawLZ2wfgu3AYOZiRoDRlp5Da"
            />
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th width="10%">Employee Id</th>
                    <th>Employee</th>
                    <th>Branch</th>
                    <th>Department</th>
                    <th>
                      <div className="form-group my-auto">
                        <div className="custom-control">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="present_all"
                            id="present_all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="present_all"
                          >
                            Attendance
                          </label>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="Id">
                        <input
                          type="hidden"
                          defaultValue={employee.id}
                          name="employee_id[]"
                        />
                        <Link to="" className="btn btn-outline-primary">
                          {employee.id}
                        </Link>
                      </td>
                      <td>{employee.name}</td>
                      <td>{employee.branchName}</td>
                      <td>{employee.departmentName}</td>
                      <td>
                        <div className="row">
                          <div className="col-md-1">
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="form-check-input present"
                                  type="checkbox"
                                  name={`present-${employee.id}`}
                                  id={`present${employee.id}`}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`present${employee.id}`}
                                ></label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8 present_check_in d-none">
                            <div className="row">
                              <label className="col-md-2 control-label">
                                In
                              </label>
                              <div className="col-md-4">
                                <input
                                  type="time"
                                  className="form-control timepicker"
                                  name={`in-${employee.id}`}
                                  defaultValue={employee.defaultIn}
                                />
                              </div>
                              <label
                                htmlFor="inputValue"
                                className="col-md-2 control-label"
                              >
                                Out
                              </label>
                              <div className="col-md-4">
                                <input
                                  type="time"
                                  className="form-control timepicker"
                                  name={`out-${employee.id}`}
                                  defaultValue={employee.defaultOut}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="attendance-btn float-end pt-4">
              <input type="hidden" defaultValue="2024-11-13" name="date" />
              <input type="hidden" defaultValue={1} name="branch" />
              <input type="hidden" defaultValue={2} name="department" />
              <input
                className="btn btn-primary"
                type="submit"
                defaultValue="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BulkAttendanceTable;
