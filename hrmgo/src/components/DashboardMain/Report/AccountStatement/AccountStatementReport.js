import React from "react";

import { TbReport } from "react-icons/tb";
import { TbSitemap } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { TbLayoutList } from "react-icons/tb";

// Card data configuration
const cardData = [];

const AccountStatementReport = () => {
  return (
    <div id="printableArea" className="">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-primary">
                    <TbReport />
                  </div>
                  <div className="ms-3">
                    <input
                      type="hidden"
                      defaultValue="Account Statement Income Report of Nov-2024 to Jun-2024"
                      id="filename"
                    />
                    <h5 className="mb-0">Report</h5>
                    <div>
                      <p className="text-muted text-sm mb-0">
                        Account Statement Summary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-secondary">
                    <TbSitemap />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Transaction Type</h5>
                    <p className="text-muted text-sm mb-0">Income </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-primary">
                    <CiCalendarDate />
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
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-primary">
                    <TbLayoutList />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Benjamin Adams</h5>
                    <p className="text-muted text-sm mb-0">
                      Total Credit : $1,600.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-primary">
                    <TbLayoutList />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Chisom Latifat</h5>
                    <p className="text-muted text-sm mb-0">
                      Total Credit : $12,000.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="theme-avtar bg-primary">
                    <TbLayoutList />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Earl Hane MD</h5>
                    <p className="text-muted text-sm mb-0">
                      Total Credit : $500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatementReport;
