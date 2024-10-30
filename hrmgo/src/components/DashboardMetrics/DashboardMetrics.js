import React from "react";

const DashboardMetrics = () => {
  return (
    <>
      <section className="dash-container">
        <div className="dash-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="page-header-title">
                    <h4 className="m-b-10">Dashboard</h4>
                  </div>
                  <ul className="breadcrumb"></ul>
                </div>
                <div className="col">
                  <div className="float-end "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto mb-3 mb-sm-0">
                          <div className="d-flex align-items-center">
                            <div className="theme-avtar bg-primary">
                              <i className="ti ti-users" />
                            </div>
                            <div className="ms-3">
                              <small className="text-muted">Total</small>
                              <h6 className="m-0">Staff</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <h4 className="m-0 text-primary">24</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto mb-3 mb-sm-0">
                          <div className="d-flex align-items-center">
                            <div className="theme-avtar bg-info">
                              <i className="ti ti-ticket" />
                            </div>
                            <div className="ms-3">
                              <small className="text-muted">Total</small>
                              <h6 className="m-0">Ticket</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <h4 className="m-0 text-info"> 9</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto mb-3 mb-sm-0">
                          <div className="d-flex align-items-center">
                            <div className="theme-avtar bg-warning">
                              <i className="ti ti-wallet" />
                            </div>
                            <div className="ms-3">
                              <small className="text-muted">Total</small>
                              <h6 className="m-0">Account Balance</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <h6 className="m-0 text-warning">$2,045,619.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mb-3 mb-sm-0">
                      <div className="d-flex align-items-center">
                        <div className="theme-avtar bg-primary">
                          <i className="ti ti-cast" />
                        </div>
                        <div className="ms-3">
                          <small className="text-muted">Total</small>
                          <h6 className="m-0">Jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end">
                      <h4 className="m-0 text-primary">4</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mb-3 mb-sm-0">
                      <div className="d-flex align-items-center">
                        <div className="theme-avtar bg-info">
                          <i className="ti ti-cast" />
                        </div>
                        <div className="ms-3">
                          <small className="text-muted">Total</small>
                          <h6 className="m-0">Active Jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end">
                      <h4 className="m-0 text-info"> 4</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mb-3 mb-sm-0">
                      <div className="d-flex align-items-center">
                        <div className="theme-avtar bg-warning">
                          <i className="ti ti-cast" />
                        </div>
                        <div className="ms-3">
                          <small className="text-muted">Total</small>
                          <h6 className="m-0">Inactive Jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end">
                      <h4 className="m-0 text-warning">0</h4>
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

export default DashboardMetrics;
