import React from "react";

const CalenderPopup = () => {
  return (
    <>
      {/* CalenderPopup */}
      <div
        id="fc-dom-121"
        className="fc-popover popover fc-more-popover fc-day fc-day-wed fc-day-future"
        aria-labelledby="fc-dom-158"
        data-date="2024-12-25"
        style={{ top: "157.087px", left: "149.938px" }}
      >
        <div className="fc-popover-header popover-header">
          <span className="fc-popover-title" id="fc-dom-158">
            December 25, 2024
          </span>
          <span className="fc-popover-close fa fa-times" title="Close" />
        </div>
        <div className="fc-popover-body popover-body">
          <div className="fc-daygrid-event-harness">
            <a
              className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future event-success"
              href="https://demo.workdo.io/hrmgo/event/67/edit"
            >
              <div className="fc-event-main">
                <div className="fc-event-main-frame">
                  <div className="fc-event-title-container">
                    <div className="fc-event-title fc-sticky">
                      Quos esse aut at ve
                    </div>
                  </div>
                </div>
              </div>
              <div className="fc-event-resizer fc-event-resizer-end" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderPopup;
