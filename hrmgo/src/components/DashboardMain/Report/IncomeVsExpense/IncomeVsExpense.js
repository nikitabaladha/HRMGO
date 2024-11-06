import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const IncomeVsExpense = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
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
          <div className="row">
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
                                <label
                                  htmlFor="start_month"
                                  className="form-label"
                                >
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
                                <label
                                  htmlFor="end_month"
                                  className="form-label"
                                >
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
                            <p className="text-muted text-sm mb-0">$200.00</p>
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
                            <p className="text-muted text-sm mb-0">
                              $961,559.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className=" rounded p-3">
                    <div id="user-chart" style={{ minHeight: 265 }}>
                      <div
                        id="apexchartszn9moa40l"
                        className="apexcharts-canvas apexchartszn9moa40l apexcharts-theme-light"
                        style={{ width: 1149, height: 250 }}
                      >
                        <svg
                          id="SvgjsSvg1001"
                          width={1149}
                          height={250}
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlns:svgjs="http://svgjs.dev"
                          className="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}
                        >
                          <foreignObject x={0} y={0} width={1149} height={250}>
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
                                data:collapsed="false"
                                style={{ margin: "2px 5px" }}
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  rel={1}
                                  data:collapsed="false"
                                  style={{
                                    background: "rgb(62, 201, 214) !important",
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
                                  data:default-text="Income"
                                  data:collapsed="false"
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
                                data:collapsed="false"
                                style={{ margin: "2px 5px" }}
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  rel={2}
                                  data:collapsed="false"
                                  style={{
                                    background: "rgb(255, 58, 110) !important",
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
                                  data:default-text="Expense"
                                  data:collapsed="false"
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
                            <style
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }",
                              }}
                            />
                          </foreignObject>
                          <g
                            id="SvgjsG1003"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(45.63535118103027, 53)"
                          >
                            <defs id="SvgjsDefs1002">
                              <linearGradient
                                id="SvgjsLinearGradient1007"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={1}
                              >
                                <stop
                                  id="SvgjsStop1008"
                                  stopOpacity="0.4"
                                  stopColor="rgba(216,227,240,0.4)"
                                  offset={0}
                                />
                                <stop
                                  id="SvgjsStop1009"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                                <stop
                                  id="SvgjsStop1010"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                              </linearGradient>
                              <clipPath id="gridRectMaskzn9moa40l">
                                <rect
                                  id="SvgjsRect1012"
                                  width="1099.3646488189697"
                                  height="161.99519938278198"
                                  x={-3}
                                  y={-1}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMaskzn9moa40l" />
                              <clipPath id="nonForecastMaskzn9moa40l" />
                              <clipPath id="gridRectMarkerMaskzn9moa40l">
                                <rect
                                  id="SvgjsRect1013"
                                  width="1129.3646488189697"
                                  height="195.99519938278198"
                                  x={-18}
                                  y={-18}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect1011"
                              width="22.77843018372853"
                              height="159.99519938278198"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              strokeDasharray={3}
                              fill="url(#SvgjsLinearGradient1007)"
                              className="apexcharts-xcrosshairs"
                              y2="159.99519938278198"
                              filter="none"
                              fillOpacity="0.9"
                            />
                            <g
                              id="SvgjsG1045"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG1046"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              >
                                <text
                                  id="SvgjsText1048"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="91.11372073491414"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1049">Nov 2023</tspan>
                                  <title>Nov 2023</title>
                                </text>
                                <text
                                  id="SvgjsText1051"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="273.34116220474243"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1052">Oct 2023</tspan>
                                  <title>Oct 2023</title>
                                </text>
                                <text
                                  id="SvgjsText1054"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="455.56860367457074"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1055">Sep 2023</tspan>
                                  <title>Sep 2023</title>
                                </text>
                                <text
                                  id="SvgjsText1057"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="637.7960451443989"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1058">Aug 2023</tspan>
                                  <title>Aug 2023</title>
                                </text>
                                <text
                                  id="SvgjsText1060"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="820.0234866142272"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1061">Jul 2023</tspan>
                                  <title>Jul 2023</title>
                                </text>
                                <text
                                  id="SvgjsText1063"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="1002.2509280840555"
                                  y="188.99519938278198"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  <tspan id="SvgjsTspan1064">Jun 2023</tspan>
                                  <title>Jun 2023</title>
                                </text>
                              </g>
                              <line
                                id="SvgjsLine1065"
                                x1={0}
                                y1="160.99519938278198"
                                x2="1093.3646488189697"
                                y2="160.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g id="SvgjsG1078" className="apexcharts-grid">
                              <g
                                id="SvgjsG1079"
                                className="apexcharts-gridlines-horizontal"
                              >
                                <line
                                  id="SvgjsLine1088"
                                  x1={0}
                                  y1={0}
                                  x2="1093.3646488189697"
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1089"
                                  x1={0}
                                  y1="39.998799845695494"
                                  x2="1093.3646488189697"
                                  y2="39.998799845695494"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1090"
                                  x1={0}
                                  y1="79.99759969139099"
                                  x2="1093.3646488189697"
                                  y2="79.99759969139099"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1091"
                                  x1={0}
                                  y1="119.99639953708649"
                                  x2="1093.3646488189697"
                                  y2="119.99639953708649"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1092"
                                  x1={0}
                                  y1="159.99519938278198"
                                  x2="1093.3646488189697"
                                  y2="159.99519938278198"
                                  stroke="#e0e0e0"
                                  strokeDasharray={4}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1080"
                                className="apexcharts-gridlines-vertical"
                              />
                              <line
                                id="SvgjsLine1081"
                                x1={0}
                                y1="160.99519938278198"
                                x2={0}
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1082"
                                x1="182.22744146982828"
                                y1="160.99519938278198"
                                x2="182.22744146982828"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1083"
                                x1="364.45488293965656"
                                y1="160.99519938278198"
                                x2="364.45488293965656"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1084"
                                x1="546.6823244094849"
                                y1="160.99519938278198"
                                x2="546.6823244094849"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1085"
                                x1="728.9097658793131"
                                y1="160.99519938278198"
                                x2="728.9097658793131"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1086"
                                x1="911.1372073491414"
                                y1="160.99519938278198"
                                x2="911.1372073491414"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1087"
                                x1="1093.3646488189697"
                                y1="160.99519938278198"
                                x2="1093.3646488189697"
                                y2="166.99519938278198"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1094"
                                x1={0}
                                y1="159.99519938278198"
                                x2="1093.3646488189697"
                                y2="159.99519938278198"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1093"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2="159.99519938278198"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1014"
                              className="apexcharts-bar-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG1015"
                                className="apexcharts-series"
                                rel={1}
                                seriesname="Income"
                                data:realindex={0}
                              >
                                <path
                                  id="SvgjsPath1019"
                                  d="M68.33529055118561 159.99519938278198L68.33529055118561 26.66586656379701C68.33529055118561 26.66586656379701 68.33529055118561 26.66586656379701 68.33529055118561 26.66586656379701L89.11372073491414 26.66586656379701C89.11372073491414 26.66586656379701 89.11372073491414 26.66586656379701 89.11372073491414 26.66586656379701L89.11372073491414 26.66586656379701L89.11372073491414 159.99519938278198L89.11372073491414 159.99519938278198C89.11372073491414 159.99519938278198 68.33529055118561 159.99519938278198 68.33529055118561 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 68.33529055118561 159.99519938278198L 68.33529055118561 26.66586656379701Q 68.33529055118561 26.66586656379701 68.33529055118561 26.66586656379701L 89.11372073491414 26.66586656379701Q 89.11372073491414 26.66586656379701 89.11372073491414 26.66586656379701L 89.11372073491414 26.66586656379701L 89.11372073491414 159.99519938278198L 89.11372073491414 159.99519938278198z"
                                  pathfrom="M 68.33529055118561 159.99519938278198L 68.33529055118561 159.99519938278198L 89.11372073491414 159.99519938278198L 89.11372073491414 159.99519938278198L 89.11372073491414 159.99519938278198L 89.11372073491414 159.99519938278198L 89.11372073491414 159.99519938278198L 68.33529055118561 159.99519938278198"
                                  cy="26.66586656379701"
                                  cx="249.5627320210139"
                                  j={0}
                                  val={100}
                                  barheight="133.32933281898497"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1021"
                                  d="M250.5627320210139 159.99519938278198L250.5627320210139 39.9987998456955C250.5627320210139 39.9987998456955 250.5627320210139 39.9987998456955 250.5627320210139 39.9987998456955L271.34116220474243 39.9987998456955C271.34116220474243 39.9987998456955 271.34116220474243 39.9987998456955 271.34116220474243 39.9987998456955L271.34116220474243 39.9987998456955L271.34116220474243 159.99519938278198L271.34116220474243 159.99519938278198C271.34116220474243 159.99519938278198 250.5627320210139 159.99519938278198 250.5627320210139 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 250.5627320210139 159.99519938278198L 250.5627320210139 39.9987998456955Q 250.5627320210139 39.9987998456955 250.5627320210139 39.9987998456955L 271.34116220474243 39.9987998456955Q 271.34116220474243 39.9987998456955 271.34116220474243 39.9987998456955L 271.34116220474243 39.9987998456955L 271.34116220474243 159.99519938278198L 271.34116220474243 159.99519938278198z"
                                  pathfrom="M 250.5627320210139 159.99519938278198L 250.5627320210139 159.99519938278198L 271.34116220474243 159.99519938278198L 271.34116220474243 159.99519938278198L 271.34116220474243 159.99519938278198L 271.34116220474243 159.99519938278198L 271.34116220474243 159.99519938278198L 250.5627320210139 159.99519938278198"
                                  cy="39.9987998456955"
                                  cx="431.79017349084216"
                                  j={1}
                                  val={90}
                                  barheight="119.99639953708648"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1023"
                                  d="M432.79017349084216 159.99519938278198L432.79017349084216 53.33173312759399C432.7901734908421 53.33173312759399 432.7901734908421 53.33173312759399 432.79017349084216 53.33173312759399L453.5686036745707 53.33173312759399C453.5686036745707 53.33173312759399 453.5686036745707 53.33173312759399 453.5686036745707 53.33173312759399L453.5686036745707 53.33173312759399L453.5686036745707 159.99519938278198L453.5686036745707 159.99519938278198C453.5686036745707 159.99519938278198 432.79017349084216 159.99519938278198 432.79017349084216 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 432.79017349084216 159.99519938278198L 432.79017349084216 53.33173312759399Q 432.79017349084216 53.33173312759399 432.79017349084216 53.33173312759399L 453.5686036745707 53.33173312759399Q 453.5686036745707 53.33173312759399 453.5686036745707 53.33173312759399L 453.5686036745707 53.33173312759399L 453.5686036745707 159.99519938278198L 453.5686036745707 159.99519938278198z"
                                  pathfrom="M 432.79017349084216 159.99519938278198L 432.79017349084216 159.99519938278198L 453.5686036745707 159.99519938278198L 453.5686036745707 159.99519938278198L 453.5686036745707 159.99519938278198L 453.5686036745707 159.99519938278198L 453.5686036745707 159.99519938278198L 432.79017349084216 159.99519938278198"
                                  cy="53.33173312759399"
                                  cx="614.0176149606705"
                                  j={2}
                                  val={80}
                                  barheight="106.66346625518798"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1025"
                                  d="M615.0176149606705 159.99519938278198L615.0176149606705 93.3305329732895C615.0176149606705 93.3305329732895 615.0176149606705 93.3305329732895 615.0176149606705 93.3305329732895L635.796045144399 93.3305329732895C635.796045144399 93.3305329732895 635.796045144399 93.3305329732895 635.796045144399 93.3305329732895L635.796045144399 93.3305329732895L635.796045144399 159.99519938278198L635.796045144399 159.99519938278198C635.796045144399 159.99519938278198 615.0176149606705 159.99519938278198 615.0176149606705 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 615.0176149606705 159.99519938278198L 615.0176149606705 93.3305329732895Q 615.0176149606705 93.3305329732895 615.0176149606705 93.3305329732895L 635.796045144399 93.3305329732895Q 635.796045144399 93.3305329732895 635.796045144399 93.3305329732895L 635.796045144399 93.3305329732895L 635.796045144399 159.99519938278198L 635.796045144399 159.99519938278198z"
                                  pathfrom="M 615.0176149606705 159.99519938278198L 615.0176149606705 159.99519938278198L 635.796045144399 159.99519938278198L 635.796045144399 159.99519938278198L 635.796045144399 159.99519938278198L 635.796045144399 159.99519938278198L 635.796045144399 159.99519938278198L 615.0176149606705 159.99519938278198"
                                  cy="93.3305329732895"
                                  cx="796.2450564304987"
                                  j={3}
                                  val={50}
                                  barheight="66.66466640949248"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1027"
                                  d="M797.2450564304987 159.99519938278198L797.2450564304987 39.9987998456955C797.2450564304987 39.9987998456955 797.2450564304987 39.9987998456955 797.2450564304987 39.9987998456955L818.0234866142273 39.9987998456955C818.0234866142273 39.9987998456955 818.0234866142273 39.9987998456955 818.0234866142273 39.9987998456955L818.0234866142273 39.9987998456955L818.0234866142273 159.99519938278198L818.0234866142273 159.99519938278198C818.0234866142273 159.99519938278198 797.2450564304987 159.99519938278198 797.2450564304987 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 797.2450564304987 159.99519938278198L 797.2450564304987 39.9987998456955Q 797.2450564304987 39.9987998456955 797.2450564304987 39.9987998456955L 818.0234866142273 39.9987998456955Q 818.0234866142273 39.9987998456955 818.0234866142273 39.9987998456955L 818.0234866142273 39.9987998456955L 818.0234866142273 159.99519938278198L 818.0234866142273 159.99519938278198z"
                                  pathfrom="M 797.2450564304987 159.99519938278198L 797.2450564304987 159.99519938278198L 818.0234866142273 159.99519938278198L 818.0234866142273 159.99519938278198L 818.0234866142273 159.99519938278198L 818.0234866142273 159.99519938278198L 818.0234866142273 159.99519938278198L 797.2450564304987 159.99519938278198"
                                  cy="39.9987998456955"
                                  cx="978.472497900327"
                                  j={4}
                                  val={90}
                                  barheight="119.99639953708648"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1029"
                                  d="M979.472497900327 159.99519938278198L979.472497900327 106.66346625518798C979.472497900327 106.66346625518798 979.472497900327 106.66346625518798 979.472497900327 106.66346625518798L1000.2509280840555 106.66346625518798C1000.2509280840554 106.66346625518798 1000.2509280840554 106.66346625518798 1000.2509280840555 106.66346625518798L1000.2509280840555 106.66346625518798L1000.2509280840555 159.99519938278198L1000.2509280840555 159.99519938278198C1000.2509280840555 159.99519938278198 979.472497900327 159.99519938278198 979.472497900327 159.99519938278198 "
                                  fill="rgba(62,201,214,0.85)"
                                  fillOpacity={1}
                                  stroke="#3ec9d6"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 979.472497900327 159.99519938278198L 979.472497900327 106.66346625518798Q 979.472497900327 106.66346625518798 979.472497900327 106.66346625518798L 1000.2509280840555 106.66346625518798Q 1000.2509280840555 106.66346625518798 1000.2509280840555 106.66346625518798L 1000.2509280840555 106.66346625518798L 1000.2509280840555 159.99519938278198L 1000.2509280840555 159.99519938278198z"
                                  pathfrom="M 979.472497900327 159.99519938278198L 979.472497900327 159.99519938278198L 1000.2509280840555 159.99519938278198L 1000.2509280840555 159.99519938278198L 1000.2509280840555 159.99519938278198L 1000.2509280840555 159.99519938278198L 1000.2509280840555 159.99519938278198L 979.472497900327 159.99519938278198"
                                  cy="106.66346625518798"
                                  cx="1160.6999393701553"
                                  j={5}
                                  val={40}
                                  barheight="53.33173312759399"
                                  barwidth="22.77843018372853"
                                />
                                <g
                                  id="SvgjsG1017"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG1018"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1020"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1022"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1024"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1026"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1028"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1030"
                                className="apexcharts-series"
                                rel={2}
                                seriesname="Expense"
                                data:realindex={1}
                              >
                                <path
                                  id="SvgjsPath1034"
                                  d="M91.11372073491414 159.99519938278198L91.11372073491414 93.3305329732895C91.11372073491414 93.3305329732895 91.11372073491414 93.3305329732895 91.11372073491414 93.3305329732895L111.89215091864267 93.3305329732895C111.89215091864267 93.3305329732895 111.89215091864267 93.3305329732895 111.89215091864267 93.3305329732895L111.89215091864267 93.3305329732895L111.89215091864267 159.99519938278198L111.89215091864267 159.99519938278198C111.89215091864267 159.99519938278198 91.11372073491414 159.99519938278198 91.11372073491414 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 91.11372073491414 159.99519938278198L 91.11372073491414 93.3305329732895Q 91.11372073491414 93.3305329732895 91.11372073491414 93.3305329732895L 111.89215091864267 93.3305329732895Q 111.89215091864267 93.3305329732895 111.89215091864267 93.3305329732895L 111.89215091864267 93.3305329732895L 111.89215091864267 159.99519938278198L 111.89215091864267 159.99519938278198z"
                                  pathfrom="M 91.11372073491414 159.99519938278198L 91.11372073491414 159.99519938278198L 111.89215091864267 159.99519938278198L 111.89215091864267 159.99519938278198L 111.89215091864267 159.99519938278198L 111.89215091864267 159.99519938278198L 111.89215091864267 159.99519938278198L 91.11372073491414 159.99519938278198"
                                  cy="93.3305329732895"
                                  cx="272.34116220474243"
                                  j={0}
                                  val={50}
                                  barheight="66.66466640949248"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1036"
                                  d="M273.34116220474243 159.99519938278198L273.34116220474243 79.99759969139099C273.34116220474243 79.99759969139099 273.34116220474243 79.99759969139099 273.34116220474243 79.99759969139099L294.11959238847095 79.99759969139099C294.11959238847095 79.99759969139099 294.11959238847095 79.99759969139099 294.11959238847095 79.99759969139099L294.11959238847095 79.99759969139099L294.11959238847095 159.99519938278198L294.11959238847095 159.99519938278198C294.11959238847095 159.99519938278198 273.34116220474243 159.99519938278198 273.34116220474243 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 273.34116220474243 159.99519938278198L 273.34116220474243 79.99759969139099Q 273.34116220474243 79.99759969139099 273.34116220474243 79.99759969139099L 294.11959238847095 79.99759969139099Q 294.11959238847095 79.99759969139099 294.11959238847095 79.99759969139099L 294.11959238847095 79.99759969139099L 294.11959238847095 159.99519938278198L 294.11959238847095 159.99519938278198z"
                                  pathfrom="M 273.34116220474243 159.99519938278198L 273.34116220474243 159.99519938278198L 294.11959238847095 159.99519938278198L 294.11959238847095 159.99519938278198L 294.11959238847095 159.99519938278198L 294.11959238847095 159.99519938278198L 294.11959238847095 159.99519938278198L 273.34116220474243 159.99519938278198"
                                  cy="79.99759969139099"
                                  cx="454.5686036745707"
                                  j={1}
                                  val={60}
                                  barheight="79.99759969139099"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1038"
                                  d="M455.5686036745707 159.99519938278198L455.5686036745707 79.99759969139099C455.5686036745707 79.99759969139099 455.5686036745707 79.99759969139099 455.5686036745707 79.99759969139099L476.3470338582992 79.99759969139099C476.34703385829926 79.99759969139099 476.34703385829926 79.99759969139099 476.3470338582992 79.99759969139099L476.3470338582992 79.99759969139099L476.3470338582992 159.99519938278198L476.3470338582992 159.99519938278198C476.3470338582992 159.99519938278198 455.5686036745707 159.99519938278198 455.5686036745707 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 455.5686036745707 159.99519938278198L 455.5686036745707 79.99759969139099Q 455.5686036745707 79.99759969139099 455.5686036745707 79.99759969139099L 476.3470338582992 79.99759969139099Q 476.3470338582992 79.99759969139099 476.3470338582992 79.99759969139099L 476.3470338582992 79.99759969139099L 476.3470338582992 159.99519938278198L 476.3470338582992 159.99519938278198z"
                                  pathfrom="M 455.5686036745707 159.99519938278198L 455.5686036745707 159.99519938278198L 476.3470338582992 159.99519938278198L 476.3470338582992 159.99519938278198L 476.3470338582992 159.99519938278198L 476.3470338582992 159.99519938278198L 476.3470338582992 159.99519938278198L 455.5686036745707 159.99519938278198"
                                  cy="79.99759969139099"
                                  cx="636.796045144399"
                                  j={2}
                                  val={60}
                                  barheight="79.99759969139099"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1040"
                                  d="M637.796045144399 159.99519938278198L637.796045144399 119.99639953708649C637.796045144399 119.99639953708649 637.796045144399 119.99639953708649 637.796045144399 119.99639953708649L658.5744753281276 119.99639953708649C658.5744753281276 119.99639953708649 658.5744753281276 119.99639953708649 658.5744753281276 119.99639953708649L658.5744753281276 119.99639953708649L658.5744753281276 159.99519938278198L658.5744753281276 159.99519938278198C658.5744753281276 159.99519938278198 637.796045144399 159.99519938278198 637.796045144399 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 637.796045144399 159.99519938278198L 637.796045144399 119.99639953708649Q 637.796045144399 119.99639953708649 637.796045144399 119.99639953708649L 658.5744753281276 119.99639953708649Q 658.5744753281276 119.99639953708649 658.5744753281276 119.99639953708649L 658.5744753281276 119.99639953708649L 658.5744753281276 159.99519938278198L 658.5744753281276 159.99519938278198z"
                                  pathfrom="M 637.796045144399 159.99519938278198L 637.796045144399 159.99519938278198L 658.5744753281276 159.99519938278198L 658.5744753281276 159.99519938278198L 658.5744753281276 159.99519938278198L 658.5744753281276 159.99519938278198L 658.5744753281276 159.99519938278198L 637.796045144399 159.99519938278198"
                                  cy="119.99639953708649"
                                  cx="819.0234866142273"
                                  j={3}
                                  val={30}
                                  barheight="39.998799845695494"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1042"
                                  d="M820.0234866142273 159.99519938278198L820.0234866142273 66.6646664094925C820.0234866142273 66.6646664094925 820.0234866142273 66.6646664094925 820.0234866142273 66.6646664094925L840.8019167979559 66.6646664094925C840.8019167979558 66.6646664094925 840.8019167979558 66.6646664094925 840.8019167979559 66.6646664094925L840.8019167979559 66.6646664094925L840.8019167979559 159.99519938278198L840.8019167979559 159.99519938278198C840.8019167979559 159.99519938278198 820.0234866142273 159.99519938278198 820.0234866142273 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 820.0234866142273 159.99519938278198L 820.0234866142273 66.6646664094925Q 820.0234866142273 66.6646664094925 820.0234866142273 66.6646664094925L 840.8019167979559 66.6646664094925Q 840.8019167979559 66.6646664094925 840.8019167979559 66.6646664094925L 840.8019167979559 66.6646664094925L 840.8019167979559 159.99519938278198L 840.8019167979559 159.99519938278198z"
                                  pathfrom="M 820.0234866142273 159.99519938278198L 820.0234866142273 159.99519938278198L 840.8019167979559 159.99519938278198L 840.8019167979559 159.99519938278198L 840.8019167979559 159.99519938278198L 840.8019167979559 159.99519938278198L 840.8019167979559 159.99519938278198L 820.0234866142273 159.99519938278198"
                                  cy="66.6646664094925"
                                  cx="1001.2509280840555"
                                  j={4}
                                  val={70}
                                  barheight="93.33053297328948"
                                  barwidth="22.77843018372853"
                                />
                                <path
                                  id="SvgjsPath1044"
                                  d="M1002.2509280840555 159.99519938278198L1002.2509280840555 133.329332818985C1002.2509280840555 133.329332818985 1002.2509280840555 133.329332818985 1002.2509280840555 133.329332818985L1023.0293582677841 133.329332818985C1023.0293582677841 133.329332818985 1023.0293582677841 133.329332818985 1023.0293582677841 133.329332818985L1023.0293582677841 133.329332818985L1023.0293582677841 159.99519938278198L1023.0293582677841 159.99519938278198C1023.0293582677841 159.99519938278198 1002.2509280840555 159.99519938278198 1002.2509280840555 159.99519938278198 "
                                  fill="rgba(255,58,110,0.85)"
                                  fillOpacity={1}
                                  stroke="#ff3a6e"
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMaskzn9moa40l)"
                                  pathto="M 1002.2509280840555 159.99519938278198L 1002.2509280840555 133.329332818985Q 1002.2509280840555 133.329332818985 1002.2509280840555 133.329332818985L 1023.0293582677841 133.329332818985Q 1023.0293582677841 133.329332818985 1023.0293582677841 133.329332818985L 1023.0293582677841 133.329332818985L 1023.0293582677841 159.99519938278198L 1023.0293582677841 159.99519938278198z"
                                  pathfrom="M 1002.2509280840555 159.99519938278198L 1002.2509280840555 159.99519938278198L 1023.0293582677841 159.99519938278198L 1023.0293582677841 159.99519938278198L 1023.0293582677841 159.99519938278198L 1023.0293582677841 159.99519938278198L 1023.0293582677841 159.99519938278198L 1002.2509280840555 159.99519938278198"
                                  cy="133.329332818985"
                                  cx="1183.4783695538838"
                                  j={5}
                                  val={20}
                                  barheight="26.665866563796996"
                                  barwidth="22.77843018372853"
                                />
                                <g
                                  id="SvgjsG1032"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG1033"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1035"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1037"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1039"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1041"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1043"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1016"
                                className="apexcharts-datalabels"
                                data:realindex={0}
                              />
                              <g
                                id="SvgjsG1031"
                                className="apexcharts-datalabels"
                                data:realindex={1}
                              />
                            </g>
                            <line
                              id="SvgjsLine1095"
                              x1={0}
                              y1={0}
                              x2="1093.3646488189697"
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1096"
                              x1={0}
                              y1={0}
                              x2="1093.3646488189697"
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1097"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1098"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1099"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                          <g
                            id="SvgjsG1066"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(15.635351181030273, 0)"
                          >
                            <g
                              id="SvgjsG1067"
                              className="apexcharts-yaxis-texts-g"
                            >
                              <text
                                id="SvgjsText1068"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={20}
                                y="54.4"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1069">120</tspan>
                                <title>120</title>
                              </text>
                              <text
                                id="SvgjsText1070"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={20}
                                y="94.39879984569549"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1071">90</tspan>
                                <title>90</title>
                              </text>
                              <text
                                id="SvgjsText1072"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={20}
                                y="134.39759969139098"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1073">60</tspan>
                                <title>60</title>
                              </text>
                              <text
                                id="SvgjsText1074"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={20}
                                y="174.39639953708647"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1075">30</tspan>
                                <title>30</title>
                              </text>
                              <text
                                id="SvgjsText1076"
                                fontFamily="Helvetica, Arial, sans-serif"
                                x={20}
                                y="214.39519938278195"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="11px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1077">0</tspan>
                                <title>0</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1004"
                            className="apexcharts-annotations"
                          />
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12,
                            }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(62, 201, 214)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12,
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
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
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 2 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(255, 58, 110)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12,
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
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
        </div>
      </section>
    </>
  );
};

export default IncomeVsExpense;
