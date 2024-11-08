//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

const LeaveSearchForm = () => {
  return (
    <>
      <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">
        <div className=" mt-2 " id="multiCollapseExample1">
          <div className="card">
            <div className="card-body">
              <form
                method="GET"
                // action="https://demo.workdo.io/hrmgo/report/leave"
                acceptCharset="UTF-8"
                id="report_leave"
              >
                <div className="d-flex align-items-center justify-content-end">
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <br />
                    <div className="form-check form-check-inline form-group">
                      <input
                        type="radio"
                        id="monthly"
                        defaultValue="monthly"
                        name="type"
                        className="form-check-input"
                        defaultChecked=""
                      />
                      <label htmlFor="monthly" className="form-label">
                        Monthly
                      </label>
                    </div>
                    <div className="form-check form-check-inline form-group">
                      <input
                        type="radio"
                        id="yearly"
                        defaultValue="yearly"
                        name="type"
                        className="form-check-input yearly"
                      />
                      <label htmlFor="yearly" className="form-label">
                        Yearly
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2 month">
                    <div className="btn-box">
                      <label htmlFor="month" className="form-label">
                        Month
                      </label>
                      <input
                        className="month-btn form-control"
                        name="month"
                        type="month"
                        defaultValue="2024-11"
                        id="month"
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2 year d-none">
                    <div className="btn-box">
                      <label htmlFor="year" className="form-label">
                        Year
                      </label>
                      <select
                        className="form-control select"
                        id="year"
                        name="year"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value={2019}>2019</option>
                        <option value={2020}>2020</option>
                        <option value={2021}>2021</option>
                        <option value={2022}>2022</option>
                        <option value={2023}>2023</option>
                        <option selected="" value={2024}>
                          2024
                        </option>
                        <option value={2025}>2025</option>
                        <option value={2026}>2026</option>
                        <option value={2027}>2027</option>
                        <option value={2028}>2028</option>
                        <option value={2029}>2029</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="branch" className="form-label">
                        Branch
                      </label>
                      <select
                        className="form-control select branch_id"
                        id="branch"
                        name="branch"
                      >
                        <option value="" selected="selected">
                          All
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
                    <div className="btn-box" id="department_id">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <select
                        className="form-control select department_id"
                        name="department"
                        id="department_id"
                        placeholder="Select Department"
                      ></select>
                    </div>
                  </div>
                  <div className="col-auto float-end ms-2 mt-4">
                    <Link
                      to="/"
                      className="btn btn-sm btn-primary"
                      onclick="document.getElementById('report_leave').submit(); return false;"
                      data-bs-toggle="tooltip"
                      title="Apply"
                      data-original-title="apply"
                    >
                      <span className="btn-inner--icon">
                        <IoIosSearch />
                      </span>
                    </Link>
                    <Link
                      to="/report/leave"
                      className="btn btn-sm btn-danger "
                      data-bs-toggle="tooltip"
                      title="Reset"
                      data-original-title="Reset"
                    >
                      <span className="btn-inner--icon">
                        <MdOutlineDeleteForever />
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

export default LeaveSearchForm;
