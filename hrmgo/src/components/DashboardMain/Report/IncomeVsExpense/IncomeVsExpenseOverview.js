//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";
import { Link } from "react-router-dom";

const IncomeVsExpenseOverview = () => {
  return (
    <>
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
    </>
  );
};

export default IncomeVsExpenseOverview;
