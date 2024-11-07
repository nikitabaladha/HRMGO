//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import UserChart from "./UserChart";

const IncomeVsExpense = () => {
  const [isSecondGroupVisible, setIsSecondGroupVisible] = useState(false);

  // Example of setting the state to true
  // setIsSecondGroupVisible(true);

  return (
    <>
      {/* first row */}
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="page-header-title">
                <h4 className="m-b-10">Manage Income Vs Expense</h4>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://demo.workdo.io/hrmgo/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">
                  Manage Income Vs Expense Report
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="float-end ">
                <a
                  href="#"
                  onclick="saveAsPDF()"
                  className="btn btn-sm btn-primary"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Download"
                >
                  <span className="btn-inner--icon">
                    <i className="ti ti-download " />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="row">
        {" "}
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
                          <a
                            href="#"
                            className="btn btn-sm btn-primary"
                            onclick="document.getElementById('report_income_expense').submit(); return false;"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="apply"
                          >
                            <span className="btn-inner--icon">
                              <i className="ti ti-search" />
                            </span>
                          </a>
                          <a
                            href="https://demo.workdo.io/hrmgo/report/income-expense"
                            className="btn btn-sm btn-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Reset"
                          >
                            <span className="btn-inner--icon">
                              <i className="ti ti-trash-off text-white-off " />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Third row  */}
        <div id="printableArea">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="theme-avtar bg-primary">
                        <i className="ti ti-file-report" />
                      </div>
                      <input
                        type="hidden"
                        defaultValue="Income vs Expense Report of Nov-2024 to Jun-2024"
                        id="filename"
                      />
                      <div className="ms-3">
                        <h5 className="mb-0">Report</h5>
                        <p className="text-muted text-sm mb-0">
                          Income vs Expense Summary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="theme-avtar bg-secondary">
                        <i className="ti ti-calendar-time" />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Duration</h5>
                        <p className="text-muted text-sm mb-0">
                          Nov-2024 to Jun-2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="theme-avtar bg-primary">
                        <i className="ti ti-wallet" />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Total Income</h5>
                        <p className="text-muted text-sm mb-0">$100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="theme-avtar bg-secondary">
                        <i className="ti ti-report-money" />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Total Expense</h5>
                        <p className="text-muted text-sm mb-0">$100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth row */}
          <UserChart />
        </div>
      </div>
    </>
  );
};

export default IncomeVsExpense;
