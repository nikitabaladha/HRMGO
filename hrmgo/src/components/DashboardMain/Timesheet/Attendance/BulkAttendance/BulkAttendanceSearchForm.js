import React from "react";

import { Link } from "react-router-dom";
import { TbTrashOff } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";

const BulkAttendanceSearchForm = () => {
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
                        branch
                      </label>
                      <select
                        className="form-control select "
                        id="branch_id"
                        name="branch"
                      >
                        <option value="" selected="selected">
                          Select Branch
                        </option>
                        <option value={1}>China</option>
                        <option value={2}>India</option>
                        <option value={3}>Canada</option>
                        <option value={4}>Greece</option>
                        <option value={5}>Italy</option>
                        <option value={6}>Japan</option>
                        <option value={7}>Malaysia</option>
                        <option value={8}>France</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <label htmlFor="department" className="form-label">
                      department
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
                        <option value={1}>All</option>
                        <option value={1}>Financials</option>
                        <option value={2}>Industrials</option>
                        <option value={3}>Health care</option>
                        <option value={4}>Telecommunications</option>
                        <option value={5}>Financials</option>
                        <option value={6}>Technology</option>
                        <option value={7}>Technology</option>
                        <option value={8}>Sales Department</option>
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
