//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const IncomeVsExpense = () => {
  return (
    <>
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
    </>
  );
};

export default IncomeVsExpense;
