//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

const IncomeVsExpenseMonthHeader = () => {
  return (
    <>
      <div className="col-sm-12">
        <div className="mt-2" id="multiCollapseExample1">
          <div className="card">
            <div className="card-body">
              <form
                method="GET"
                action="https://demo.workdo.io/hrmgo/report/income-expense"
                acceptCharset="UTF-8"
                id="report_income_expense"
              >
                <div className="row align-items-center justify-content-end">
                  <div className="col-xl-10">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="btn-box"></div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="btn-box"></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="btn-box">
                          <label htmlFor="start_month" className="form-label">
                            Start Month
                          </label>
                          <input
                            className="month-btn form-control current_date"
                            autoComplete="off"
                            placeholder="Select start month"
                            name="start_month"
                            type="month"
                            defaultValue=""
                            id="start_month"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="btn-box">
                          <label htmlFor="end_month" className="form-label">
                            End Month
                          </label>
                          <input
                            className="month-btn form-control current_date"
                            autoComplete="off"
                            placeholder="Select end month"
                            name="end_month"
                            type="month"
                            defaultValue=""
                            id="end_month"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="row">
                      <div className="col-auto mt-4">
                        <Link
                          to="/"
                          className="btn btn-sm btn-primary"
                          onclick="document.getElementById('report_income_expense').submit(); return false;"
                          data-bs-toggle="tooltip"
                          title=""
                          data-bs-original-title="apply"
                        >
                          <span className="btn-inner--icon">
                            <IoIosSearch />
                          </span>
                        </Link>
                        <Link
                          to="/report/income-expense"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="tooltip"
                          title=""
                          data-bs-original-title="Reset"
                        >
                          <span className="btn-inner--icon">
                            <MdOutlineDeleteForever />
                          </span>
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
    </>
  );
};

export default IncomeVsExpenseMonthHeader;
