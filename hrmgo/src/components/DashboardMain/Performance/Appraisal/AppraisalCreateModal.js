import React from "react";
import AppraisalRating from "./AppraisalRating.js";
const AppraisalCreateModal = ({ closeModal }) => {
  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        style={{ display: "block", paddingLeft: 0 }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Appraisal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="body ">
              <form
                method="POST"
                acceptCharset="UTF-8"
                id="ratingForm"
                className="needs-validation"
                noValidate=""
              >
                <input name="_token" type="hidden" />
                <div className="modal-body">
                  <div className="card-footer text-end"></div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="branch" className="col-form-label">
                          Select Branch
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          name="brances"
                          id="brances"
                          className="form-control "
                          required=""
                        >
                          <option selected="" disabled="" value="">
                            Select Branch
                          </option>
                          <option value={1}>China</option>
                          <option value={2}>India</option>
                          <option value={3}>Canada</option>
                          <option value={4}>Greece</option>
                          <option value={5}>Italy</option>
                          <option value={6}>Japan</option>
                          <option value={7}>Malaysia</option>
                          <option value={8}>France</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mt-2">
                      <div className="form-group">
                        <label htmlFor="employee" className="form-label">
                          Employee
                        </label>
                        <span className="text-danger">*</span>
                        <div className="employee_div">
                          <select
                            name="employee"
                            id="employee"
                            className="form-control "
                            required=""
                          ></select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="appraisal_date"
                          className="col-form-label"
                        >
                          Select Month
                        </label>
                        <span className="text-danger">*</span>
                        <input
                          className="form-control "
                          autoComplete="off"
                          required="required"
                          id="current_month"
                          name="appraisal_date"
                          type="month"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="remark" className="col-form-label">
                          Remarks
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Enter remark"
                          name="remark"
                          cols={50}
                          id="remark"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row" id="stares">
                    <AppraisalRating />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    defaultValue="Cancel"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  />
                  <input
                    type="submit"
                    defaultValue="Create"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalCreateModal;
