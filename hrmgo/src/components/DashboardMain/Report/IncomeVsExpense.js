//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

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

          <div className="col-md-12">
            <div className="card">
              <div className="rounded p-3">
                <div id="user-chart" style={{ minHeight: 265 }}>
                  <div
                    id="apexchartsa6p5c5eu"
                    className="apexcharts-canvas apexchartsa6p5c5eu apexcharts-theme-light"
                    style={{ width: 1172, height: 250 }}
                  >
                    <svg
                      id="SvgjsSvg1001"
                      width={1172}
                      height={250}
                      className="apexcharts-svg"
                      transform="translate(0, 0)"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={1172} height={250}>
                        <div
                          className="apexcharts-legend apexcharts-align-right apx-legend-position-top"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            right: 0,
                            position: "absolute",
                            left: 0,
                            top: 4,
                            maxHeight: 125,
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname="Income"
                            data-collapsed={false}
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={1}
                              data-collapsed={false}
                              style={{
                                backgroundColor: "rgb(62, 201, 214) !important",
                                color: "rgb(62, 201, 214)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 2,
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data-default-text="Income"
                              data-collapsed={false}
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              Income
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname="Expense"
                            data-collapsed={false}
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={2}
                              data-collapsed={false}
                              style={{
                                backgroundColor: "rgb(255, 58, 110) !important",
                                color: "rgb(255, 58, 110)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 2,
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data-default-text="Income"
                              data-collapsed={false}
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              Expense
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html: `
          .apexcharts-legend {
            display: flex;
            overflow: auto;
            padding: 0 10px;
          }
          .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
            flex-wrap: wrap;
          }
          .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
            flex-direction: column;
            bottom: 0;
          }
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
            justify-content: flex-start;
          }
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
            justify-content: center;
          }
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
            justify-content: flex-end;
          }
          .apexcharts-legend-series {
            cursor: pointer;
            line-height: normal;
          }
          .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
            display: flex;
            align-items: center;
          }
          .apexcharts-legend-text {
            position: relative;
            font-size: 14px;
          }
          .apexcharts-legend-text *, .apexcharts-legend-marker * {
            pointer-events: none;
          }
          .apexcharts-legend-marker {
            position: relative;
            display: inline-block;
            cursor: pointer;
            margin-right: 3px;
            border-style: solid;
          }
          .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
            display: inline-block;
          }
          .apexcharts-legend-series.apexcharts-no-click {
            cursor: auto;
          }
          .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
            display: none !important;
          }
          .apexcharts-inactive-legend {
            opacity: 0.45;
          }`,
                        }}
                      />
                    </svg>

                    <div
                      className="apexcharts-tooltip apexcharts-theme-light"
                      style={{ left: "124.203px", top: "44.3px" }}
                    >
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12,
                        }}
                      >
                        Nov 2023
                      </div>

                      {/* First Tooltip Series Group */}
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{ order: 1, display: "flex" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgba(62, 201, 214, 0.85)",
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12,
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Income:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              100
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>

                      {/* Second Tooltip Series Group */}
                      {isSecondGroupVisible && (
                        <div
                          className="apexcharts-tooltip-series-group"
                          style={{ order: 2, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{
                              backgroundColor: "rgba(62, 201, 214, 0.85)",
                            }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12,
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                Income:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                100
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
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

export default IncomeVsExpense;
