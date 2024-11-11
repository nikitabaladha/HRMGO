import React from "react";

const CalenderModal = ({ onClose, popupData }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Event Date: {popupData?.date}</h4>
        <ul>
          {popupData?.events?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CalenderModal;

{
  /* <div
  className="modal fade show"
  id="commonModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  style={{ display: "block" }}
  aria-modal="true"
  role="dialog"
>
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Culpa non perspiciat
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
      <div className="body ">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .event_color_active {\n        box-shadow: inset 0 0 0 2px #000;\n    }\n",
          }}
        />
        <form
          method="POST"
          action="https://demo.workdo.io/hrmgo/event/65"
          acceptCharset="UTF-8"
          className="needs-validation"
          noValidate=""
        >
          <input name="_method" type="hidden" defaultValue="PUT" />
          <input
            name="_token"
            type="hidden"
            defaultValue="Z57vgCYH50iO53PFwuWSQqTCMer1chGtrf3fsSQo"
          />
          <div className="modal-body">
            <div className="text-end">
              <a
                href="#"
                className="btn btn-sm btn-primary"
                data-size="medium"
                data-ajax-popup-over="true"
                data-url="https://demo.workdo.io/hrmgo/generate/event"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Generate"
                data-title="Generate Content With AI"
              >
                <i className="fas fa-robot" /> Generate With AI
              </a>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="title" className="col-form-label">
                  Event Title
                </label>
                <span className="text-danger">*</span>
                <input
                  className="form-control"
                  required="required"
                  placeholder="Enter Event Title"
                  name="title"
                  type="text"
                  defaultValue="Culpa non perspiciat"
                  id="title"
                />
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="start_date" className="col-form-label">
                    Event start Date
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    className="form-control"
                    required="required"
                    autoComplete="off"
                    name="start_date"
                    type="date"
                    defaultValue="2025-01-26 00:00:00"
                    id="start_date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="end_date" className="col-form-label">
                    Event End Date
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    className="form-control"
                    required="required"
                    autoComplete="off"
                    name="end_date"
                    type="date"
                    defaultValue="2023-08-29 00:00:00"
                    id="end_date"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="color" className="col-form-label d-block mb-3">
                  Event Select Color
                </label>
                <div
                  className=" btn-group-toggle btn-group-colors event-tag"
                  data-toggle="buttons"
                >
                  <label className="btn bg-info p-3  ">
                    <input
                      type="radio"
                      name="color"
                      className="d-none event_color"
                      defaultValue="event-info"
                    />
                  </label>
                  <label className="btn bg-warning p-3 ">
                    <input
                      type="radio"
                      className="d-none event_color"
                      name="color"
                      defaultValue="event-warning"
                    />
                  </label>
                  <label className="btn bg-danger p-3 ">
                    <input
                      type="radio"
                      name="color"
                      className="d-none event_color"
                      defaultValue="event-danger"
                    />
                  </label>
                  <label className="btn bg-success p-3 ">
                    <input
                      type="radio"
                      className="d-none event_color"
                      name="color"
                      defaultValue="event-success"
                    />
                  </label>
                  <label
                    className="btn p-3 custom_color_radio_button event_color_active"
                    style={{ backgroundColor: "#51459d !important" }}
                  >
                    <input
                      type="radio"
                      className="d-none event_color"
                      name="color"
                      defaultValue="event-primary"
                      defaultChecked=""
                    />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description" className="col-form-label">
                  Event Description
                </label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Enter Event Description"
                  name="description"
                  cols={50}
                  id="description"
                  defaultValue={"Animi perferendis l"}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn  btn-light"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <input
              type="submit"
              defaultValue="Update"
              className="btn  btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>; */
}
