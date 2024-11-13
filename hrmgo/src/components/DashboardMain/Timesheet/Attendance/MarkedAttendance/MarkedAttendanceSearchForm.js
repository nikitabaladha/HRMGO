import React, { useEffect, useState } from "react";
import getAPI from "../../../../../api/getAPI.js";

import { Link } from "react-router-dom";
import { TbTrashOff } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";

const MarkedAttendanceSearchForm = () => {
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
    <div className="col-sm-12">
      <div className=" mt-2 " id="multiCollapseExample1">
        <div className="card">
          <div className="card-body">
            <form
              method="GET"
              action="/attendanceemployee"
              acceptCharset="UTF-8"
              id="attendanceemployee_filter"
            >
              <div className="row align-items-center justify-content-end">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-3">
                      <label className="form-label">Type</label> <br />
                      <div className="form-check form-check-inline form-group">
                        <input
                          type="radio"
                          id="monthly"
                          defaultValue="monthly"
                          name="type"
                          className="form-check-input"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="monthly">
                          Monthly
                        </label>
                      </div>
                      <div className="form-check form-check-inline form-group">
                        <input
                          type="radio"
                          id="daily"
                          defaultValue="daily"
                          name="type"
                          className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="daily">
                          Daily
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 month">
                      <div className="btn-box">
                        <label htmlFor="month" className="form-label">
                          Month
                        </label>
                        <input
                          className="month-btn form-control month-btn"
                          name="month"
                          type="month"
                          defaultValue="2024-11"
                          id="month"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="btn-box">
                        <label htmlFor="branch" className="form-label">
                          Branch
                        </label>
                        <select
                          className="form-control select"
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
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="form-icon-user" id="department_div">
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
                              <option
                                key={department._id}
                                value={department._id}
                              >
                                {department.departmentName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto mt-4">
                  <div className="row">
                    <div className="col-auto">
                      <Link
                        to="/"
                        className="btn btn-sm btn-primary"
                        onclick="document.getElementById('attendanceemployee_filter').submit(); return false;"
                        data-bs-toggle="tooltip"
                        title="Apply"
                        data-original-title="apply"
                      >
                        <span className="btn-inner--icon">
                          <IoMdSearch />
                        </span>
                      </Link>
                      <Link
                        to="/attendanceemployee"
                        className="btn btn-sm btn-danger "
                        data-bs-toggle="tooltip"
                        title="Reset"
                        data-original-title="Reset"
                      >
                        <span className="btn-inner--icon">
                          <TbTrashOff className="text-white-off " />
                        </span>
                      </Link>
                      <Link
                        to="/"
                        data-url="/import/attendance/file"
                        data-ajax-popup="true"
                        data-title="Import  Attendance CSV File"
                        data-bs-toggle="tooltip"
                        title=""
                        className="btn btn-sm btn-primary"
                        data-bs-original-title="Import"
                      >
                        <FaRegFile />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkedAttendanceSearchForm;
