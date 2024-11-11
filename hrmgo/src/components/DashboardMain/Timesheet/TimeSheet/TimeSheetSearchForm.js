//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";
import { Link } from "react-router-dom";

import { TbTrashOff } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";

const TimeSheetSearchForm = () => {
  return (
    <>
      <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">
        <div className=" mt-2 " id="multiCollapseExample1" style={{}}>
          <div className="card">
            <div className="card-body">
              <form
                method="GET"
                action="/timesheet"
                acceptCharset="UTF-8"
                id="timesheet_filter"
              >
                <div className="d-flex align-items-center justify-content-end">
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="start_date" className="form-label">
                        Start Date
                      </label>
                      <input
                        className="month-btn form-control current_date"
                        autoComplete="off"
                        name="start_date"
                        type="date"
                        defaultValue=""
                        id="start_date"
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="end_date" className="form-label">
                        End Date
                      </label>
                      <input
                        className="month-btn form-control current_date"
                        autoComplete="off"
                        name="end_date"
                        type="date"
                        defaultValue=""
                        id="end_date"
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mx-2">
                    <div className="btn-box">
                      <label htmlFor="employee" className="form-label">
                        Employee
                      </label>
                      <select
                        className="form-control select "
                        id="employee_id"
                        name="employee"
                      >
                        <option value="" selected="selected">
                          All
                        </option>
                        <option value={4}>Julie Lynn</option>
                        <option value={5}>Lunea Todd</option>
                        <option value={6}>Ida F. Mullen</option>
                        <option value={7}>Teresa R McRae</option>
                        <option value={8}>Joel O Dolan</option>
                        <option value={15}>Jeremy Holmes</option>
                        <option value={16}>Anjolie Mayer</option>
                        <option value={17}>Nyssa Sloan</option>
                        <option value={19}>Jillian Sykes</option>
                        <option value={20}>Aida Bugg</option>
                        <option value={21}>Mona Hendricks</option>
                        <option value={22}>Kyle Willis</option>
                        <option value={29}>Abra Stevens</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto float-end ms-2 mt-4">
                    <Link
                      to="/"
                      className="btn btn-sm btn-primary"
                      onclick="document.getElementById('timesheet_filter').submit(); return false;"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="apply"
                    >
                      <span className="btn-inner--icon">
                        <IoMdSearch />
                      </span>
                    </Link>
                    <Link
                      to="/timesheet"
                      className="btn btn-sm btn-danger"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Reset"
                    >
                      <span className="btn-inner--icon">
                        <TbTrashOff className="text-white-off " />
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

export default TimeSheetSearchForm;
