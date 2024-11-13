import React, { useEffect, useState } from "react";
import getAPI from "../../../../../api/getAPI.js";

import { Link } from "react-router-dom";
import { TbTrashOff } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";

const BulkAttendanceSearchForm = () => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [departments, setDepartments] = useState([]);

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

          // Check if the response is valid
          if (!response.hasError && Array.isArray(response.data.data)) {
            setDepartments(response.data.data);
          } else {
            console.error("Invalid response format or error in response");
          }
        } catch (err) {
          console.error("Error fetching department data:", err); // Error handling
        }
      };
      fetchDepartmentByBranchId();
    } else {
      setDepartments([]);
    }
  };

  useEffect(() => {
    // Fetch branch data on component mount
    const fetchBranchData = async () => {
      try {
        const response = await getAPI(`/branch-get-all`, {}, true);

        // Check if the response is valid
        if (!response.hasError && Array.isArray(response.data.data)) {
          setBranches(response.data.data); // Set the branches data
          console.log("Branch data:", response.data.data); // Optional: For debugging
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching branch data:", err); // Error handling
      }
    };
    fetchBranchData();
  }, []);

  return (
    <>
      <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">
        <div className=" mt-2 " id="" style={{}}>
          <div className="card">
            <div className="card-body">
              <form
                method="GET"
                action="/attendanceemployee/bulkattendance"
                acceptCharset="UTF-8"
                id="bulkattendance_filter"
              >
                <div className="d-flex align-items-center justify-content-end">
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        className="month-btn form-control d_week "
                        autoComplete="off"
                        name="date"
                        type="text"
                        defaultValue="2024-11-13"
                        id="date"
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="branch" className="form-label">
                        Branch
                      </label>
                      <select
                        className="form-control select "
                        id="branch_id"
                        name="branch"
                        value={selectedBranch}
                        onChange={handleBranchChange}
                      >
                        <option value="" selected="selected">
                          All
                        </option>
                        {branches.map((branch) => (
                          <option key={branch._id} value={branch._id}>
                            {branch.branchName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <label htmlFor="department" className="form-label">
                      Department
                    </label>
                    <div className="btn-box">
                      <select
                        className="form-control select department_id"
                        id="department_id"
                        name="department"
                      >
                        <option value="" selected="selected">
                          Select Department
                        </option>
                        {departments.map((department) => (
                          <option key={department._id} value={department._id}>
                            {department.departmentName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-auto float-end ms-2 mt-4">
                    <Link
                      to="/"
                      className="btn btn-sm btn-primary"
                      onclick="document.getElementById('bulkattendance_filter').submit(); return false;"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="apply"
                    >
                      <span className="btn-inner--icon">
                        <IoMdSearch />
                      </span>
                    </Link>
                    <Link
                      to="/attendanceemployee/bulkattendance"
                      className="btn btn-sm btn-danger"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Reset"
                    >
                      <span className="btn-inner--icon">
                        <TbTrashOff />
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulkAttendanceSearchForm;
