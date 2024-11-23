import React from "react";
import "react-toastify/dist/ReactToastify.css";

const AppraisalRating = ({ indicatorData }) => {
  console.log("Indicator from update", indicatorData);

  if (!indicatorData) return null;

  const renderRating = (name, value) => {
    return (
      <fieldset id="demo1" className="rate">
        {[5, 4, 3, 2, 1].map((rating) => (
          <React.Fragment key={rating}>
            <input
              className="stars"
              type="radio"
              id={`${name}-${rating}`}
              name={`rating[${name}]`}
              value={rating}
              checked={value === rating}
            />
            <label
              className="full"
              htmlFor={`${name}-${rating}`}
              title={`${rating} star${rating > 1 ? "s" : ""}`}
            />
          </React.Fragment>
        ))}
      </fieldset>
    );
  };

  return (
    <div className="row">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Indicator
            </h5>
          </div>
          <div className="body">
            <input name="_method" type="hidden" defaultValue="PUT" />
            <input name="_token" type="hidden" />
            <div className="modal-body">
              <div className="row">
                {/* Organizational Competencies */}
                <div className="col-md-12 mt-3">
                  <h6>Organizational Competencies</h6>
                  <hr className="mt-0" />
                </div>
                {indicatorData.competencies?.organizational?.map(
                  (competency) => (
                    <React.Fragment key={competency.name}>
                      <div className="col-6">{competency.name}</div>
                      <div className="col-6">
                        {renderRating(competency.name, competency.rating)}
                      </div>
                    </React.Fragment>
                  )
                )}

                {/* Technical Competencies */}
                <div className="col-md-12 mt-3">
                  <h6>Technical Competencies</h6>
                  <hr className="mt-0" />
                </div>
                {indicatorData.competencies?.technical?.map((competency) => (
                  <React.Fragment key={competency.name}>
                    <div className="col-6">{competency.name}</div>
                    <div className="col-6">
                      {renderRating(competency.name, competency.rating)}
                    </div>
                  </React.Fragment>
                ))}

                {/* Behavioural Competencies */}
                <div className="col-md-12 mt-3">
                  <h6>Behavioural Competencies</h6>
                  <hr className="mt-0" />
                </div>
                {indicatorData.competencies?.behavioural?.map((competency) => (
                  <React.Fragment key={competency.name}>
                    <div className="col-6">{competency.name}</div>
                    <div className="col-6">
                      {renderRating(competency.name, competency.rating)}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalRating;
