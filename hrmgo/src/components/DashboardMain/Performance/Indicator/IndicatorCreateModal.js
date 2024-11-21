import React from "react";
import getAPI from "../../../../api/getAPI.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppraisalCreateModal = ({ closeModal }) => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [designations, setDesignation] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState("");

  const handleBranchChange = (e) => {
    const branchId = e.target.value;
    setSelectedBranch(branchId);

    if (branchId) {
      const fetchDepartmentByBranchId = async () => {
        try {
          const response = await getAPI(
            `/department-get-all-by-branch-id?branchId=${branchId}`,
            {},
            true,
            true
          );

          if (!response.hasError && Array.isArray(response.data.data)) {
            setDepartments(response.data.data);
          } else {
            console.error("Invalid response format or error in response");
          }
        } catch (err) {
          console.error("Error fetching department data:", err);
        }
      };
      fetchDepartmentByBranchId();
    } else {
      setDepartments([]);
    }
  };

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartment(departmentId);

    if (departmentId) {
      const fetchDesignationByDepartmentId = async () => {
        try {
          const response = await getAPI(
            `/designation-get-all-by-department-id?departmentId=${departmentId}`,
            {},
            true,
            true
          );
          if (!response.hasError && Array.isArray(response.data.data)) {
            setDesignation(response.data.data);
          } else {
            console.error("Invalid response format or error in response");
          }
        } catch (err) {
          console.error("Error fetching designation data:", err);
        }
      };
      fetchDesignationByDepartmentId();
    } else {
      setDesignation([]); // Reset designations if no department is selected
    }
  };

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const response = await getAPI(`/branch-get-all`, {}, true);
        if (!response.hasError && Array.isArray(response.data.data)) {
          setBranches(response.data.data);
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching branch data:", err);
      }
    };
    fetchBranchData();
  }, []);

  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{
          display: "block",
          paddingLeft: 0,
          backgroundColor: " rgba(0, 0, 0, 0.5)",
        }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Indicator
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
                <input
                  name="_token"
                  type="hidden"
                  defaultValue="rDtGmON270RmzECD5tQsLf49tuPSf6XJb2lsG5qd"
                />
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="branch_id" className="form-label">
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
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="department_id" className="form-label">
                          Select Department
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control select"
                          id="department_id"
                          name="department"
                          value={selectedDepartment}
                          onChange={handleDepartmentChange}
                        >
                          <option value="">Select Department</option>
                          {departments.map((department) => (
                            <option key={department._id} value={department._id}>
                              {department.departmentName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="designation_id" className="form-label">
                          Select Designation
                        </label>
                        <span className="text-danger">*</span>

                        <select
                          className="form-control select"
                          id="designation_id"
                          name="designation"
                          value={selectedDesignation}
                          onChange={(e) =>
                            setSelectedDesignation(e.target.value)
                          }
                        >
                          <option value="">Select Designation</option>
                          {designations.map((designation) => (
                            <option
                              key={designation._id}
                              value={designation._id}
                            >
                              {designation.designationName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <h6>Organizational Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Leadership</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-3"
                          name="rating[3]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-3"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-3"
                          name="rating[3]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-3"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-3"
                          name="rating[3]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-3"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-3"
                          name="rating[3]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-3"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-3"
                          name="rating[3]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-3"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-6">Project Management</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-5"
                          name="rating[5]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-5"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-5"
                          name="rating[5]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-5"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-5"
                          name="rating[5]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-5"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-5"
                          name="rating[5]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-5"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-5"
                          name="rating[5]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-5"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 mt-3">
                      <h6>Technical Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Allocating Resources</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-1"
                          name="rating[1]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-1"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-1"
                          name="rating[1]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-1"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-1"
                          name="rating[1]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-1"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-1"
                          name="rating[1]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-1"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-1"
                          name="rating[1]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-1"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 mt-3">
                      <h6>Behavioural Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Business Process</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-2"
                          name="rating[2]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-2"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-2"
                          name="rating[2]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-2"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-2"
                          name="rating[2]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-2"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-2"
                          name="rating[2]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-2"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-2"
                          name="rating[2]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-2"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-6">Oral Communication</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-4"
                          name="rating[4]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-4"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-4"
                          name="rating[4]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-4"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-4"
                          name="rating[4]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-4"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-4"
                          name="rating[4]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-4"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-4"
                          name="rating[4]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-4"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
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
