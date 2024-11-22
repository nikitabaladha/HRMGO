import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getAPI from "../../../../api/getAPI.js";
import postAPI from "../../../../api/postAPI.js";
import AppraisalRating from "./AppraisalRating.js";
const AppraisalCreateModal = ({ closeModal }) => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const response = await getAPI(`/branch-get-all`, {}, true);
        if (!response.hasError && Array.isArray(response.data.data)) {
          setBranches(response.data.data);
          console.log("Branches fetched :", response.data.data);
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching branch data:", err);
      }
    };
    fetchBranchData();
  }, []);

  const handleBranchChange = (e) => {
    const branchId = e.target.value;
    setSelectedBranch(branchId);

    if (branchId) {
      const fetchEmployeeByBranchId = async () => {
        try {
          const response = await getAPI(
            `/employee-get-filter?branchId=${branchId}`,
            {},
            true,
            true
          );

          console.log("Filtered employee", response);

          if (!response.hasError && Array.isArray(response.data.data)) {
            setEmployees(response.data.data);
          } else {
            console.error("Invalid response format or error in response");
          }
        } catch (err) {
          console.error("Error fetching department data:", err);
        }
      };
      fetchEmployeeByBranchId();
    } else {
      setEmployees([]);
    }
  };

  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        style={{
          display: "block",
          paddingLeft: 0,
          backgroundColor: " rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Appraisal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="body ">
              <form
                method="POST"
                acceptCharset="UTF-8"
                id="ratingForm"
                className="needs-validation"
                noValidate=""
              >
                <input name="_token" type="hidden" />
                <div className="modal-body">
                  <div className="card-footer text-end"></div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="branch" className="col-form-label">
                          Select Branch
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control select"
                          id="branch_id"
                          name="branch"
                          value={selectedBranch}
                          onChange={handleBranchChange}
                        >
                          <option value="">All</option>
                          {branches.map((branch) => (
                            <option key={branch._id} value={branch._id}>
                              {branch.branchName}
                            </option>
                          ))}
                        </select>{" "}
                      </div>
                    </div>
                    <div className="col-md-6 mt-2">
                      <div className="form-group">
                        <label htmlFor="employee" className="form-label">
                          Employee
                        </label>
                        <span className="text-danger">*</span>
                        <div className="employee_div">
                          <select
                            className="form-control select"
                            id="employee_id"
                            name="employee"
                            value={selectedEmployee}
                            onChange={(e) =>
                              setSelectedEmployee(e.target.value)
                            }
                          >
                            <option value="">Select Employee</option>
                            {employees.map((employee) => (
                              <option key={employee._id} value={employee._id}>
                                {employee.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="appraisal_date"
                          className="col-form-label"
                        >
                          Select Month
                        </label>
                        <span className="text-danger">*</span>
                        <input
                          className="form-control "
                          autoComplete="off"
                          required="required"
                          id="current_month"
                          name="appraisal_date"
                          type="month"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="remark" className="col-form-label">
                          Remarks
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Enter remark"
                          name="remark"
                          cols={50}
                          id="remark"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row" id="stares">
                    <AppraisalRating />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    defaultValue="Cancel"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeModal}
                  />
                  <input
                    type="submit"
                    defaultValue="Create"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalCreateModal;
