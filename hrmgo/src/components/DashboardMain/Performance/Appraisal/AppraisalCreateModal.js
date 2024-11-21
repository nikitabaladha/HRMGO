import React from "react";

const AppraisalCreateModal = ({ closeModal }) => {
  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{ display: "block", paddingLeft: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Indicator
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="body ">
              <form
                method="POST"
                action="https://demo.workdo.io/hrmgo/indicator"
                acceptCharset="UTF-8"
                id="ratingForm"
                className="needs-validation"
                noValidate=""
              >
                <input
                  name="_token"
                  type="hidden"
                  defaultValue="rDtGmON270RmzECD5tQsLf49tuPSf6XJb2lsG5qd"
                />
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="branch_id" className="form-label">
                          Select Branch
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control "
                          required="required"
                          id="branch_id"
                          name="branch_id"
                        >
                          <option selected="selected" value="">
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
                          <option value={9}>Mar</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="department_id" className="form-label">
                          Select Department
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control "
                          id="department_id"
                          required="required"
                          name="department_id"
                        >
                          <option selected="selected" value="">
                            Select Department
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="designation_id" className="form-label">
                          Select Designation
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control "
                          id="designation_id"
                          required="required"
                          name="designation_id"
                        >
                          <option selected="selected" value="">
                            Select Designation
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <h6>Organizational Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Leadership</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-3"
                          name="rating[3]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-3"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-3"
                          name="rating[3]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-3"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-3"
                          name="rating[3]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-3"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-3"
                          name="rating[3]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-3"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-3"
                          name="rating[3]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-3"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-6">Project Management</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-5"
                          name="rating[5]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-5"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-5"
                          name="rating[5]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-5"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-5"
                          name="rating[5]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-5"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-5"
                          name="rating[5]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-5"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-5"
                          name="rating[5]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-5"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 mt-3">
                      <h6>Technical Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Allocating Resources</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-1"
                          name="rating[1]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-1"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-1"
                          name="rating[1]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-1"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-1"
                          name="rating[1]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-1"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-1"
                          name="rating[1]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-1"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-1"
                          name="rating[1]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-1"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12 mt-3">
                      <h6>Behavioural Competencies</h6>
                      <hr className="mt-0" />
                    </div>
                    <div className="col-6">Business Process</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-2"
                          name="rating[2]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-2"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-2"
                          name="rating[2]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-2"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-2"
                          name="rating[2]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-2"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-2"
                          name="rating[2]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-2"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-2"
                          name="rating[2]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-2"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                    <div className="col-6">Oral Communication</div>
                    <div className="col-6">
                      <fieldset id="demo1" className="rate">
                        <input
                          className="stars"
                          type="radio"
                          id="technical-5-4"
                          name="rating[4]"
                          defaultValue={5}
                        />
                        <label
                          className="full"
                          htmlFor="technical-5-4"
                          title="Awesome - 5 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-4-4"
                          name="rating[4]"
                          defaultValue={4}
                        />
                        <label
                          className="full"
                          htmlFor="technical-4-4"
                          title="Pretty good - 4 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-3-4"
                          name="rating[4]"
                          defaultValue={3}
                        />
                        <label
                          className="full"
                          htmlFor="technical-3-4"
                          title="Meh - 3 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-2-4"
                          name="rating[4]"
                          defaultValue={2}
                        />
                        <label
                          className="full"
                          htmlFor="technical-2-4"
                          title="Kinda bad - 2 stars"
                        />
                        <input
                          className="stars"
                          type="radio"
                          id="technical-1-4"
                          name="rating[4]"
                          defaultValue={1}
                        />
                        <label
                          className="full"
                          htmlFor="technical-1-4"
                          title="Sucks big time - 1 star"
                        />
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    defaultValue="Cancel"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeModal}
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
