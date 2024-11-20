// HRMGO\hrmgo\src\components\DashboardMain\Appraisal\Appraisal\AppraisalHeader.js
import React from "react";
import { Link } from "react-router-dom";

const AppraisalHeader = () => {
  return (
    <>
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="page-header-title">
                <h4 className="m-b-10">Manage Appraisal</h4>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="">Home</Link>
                </li>
                <li className="breadcrumb-item">Appraisal</li>
              </ul>
            </div>
            <div className="col">
              <div className="float-end ">
                <Link
                  to=""
                  data-ajax-popup="true"
                  data-size="lg"
                  data-title="Create New
                  Appraisal"
                  data-bs-toggle="tooltip"
                  title=""
                  className="btn
                  btn-sm btn-primary"
                  data-bs-original-title="Create"
                >
                  <i className="ti ti-plus" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalHeader;
