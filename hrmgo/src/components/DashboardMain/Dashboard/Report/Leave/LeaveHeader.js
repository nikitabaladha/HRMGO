//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";

const LeaveHeader = () => {
  return (
    <>
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="page-header-title">
                <h4 className="m-b-10">Manage Leave Report</h4>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">Leave Report</li>
              </ul>
            </div>
            <div className="col">
              <div className="float-end ">
                <Link
                  to="/"
                  className="btn btn-sm btn-primary"
                  onclick="saveAsPDF()"
                  data-bs-toggle="tooltip"
                  title="Download"
                  data-original-title="Download"
                  style={{ marginRight: 5 }}
                >
                  <span className="btn-inner--icon">
                    <MdOutlineFileDownload />
                  </span>
                </Link>
                <Link
                  to="/export/leave/report"
                  className="btn btn-sm btn-primary float-end"
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Export"
                >
                  <TbFileExport />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveHeader;
