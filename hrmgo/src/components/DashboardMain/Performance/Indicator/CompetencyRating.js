import React, { useState } from "react";

const CompetencyRating = ({ onRatingChange }) => {
  const [ratings, setRatings] = useState({
    leadership: 0,
    projectManagement: 0,
    allocatingResources: 0,
    businessProcess: 0,
    oralCommunication: 0,
  });

  const handleRatingChange = (competency, rating) => {
    const updatedRatings = {
      ...ratings,
      [competency]: rating,
    };
    setRatings(updatedRatings);
    onRatingChange(competency, rating);
  };

  return (
    <div className="row">
      {[
        {
          label: "Organizational Competencies",
          list: [
            {
              label: "Leadership",
              key: "Leadership",
            },
            {
              label: "Project Management",
              key: "ProjectManagement",
            },
          ],
        },
        {
          label: "Technical Competencies",
          list: [
            {
              label: "Allocating Resources",
              key: "AllocatingResources",
            },
          ],
        },
        {
          label: "Behavioural Competencies",
          list: [
            {
              label: "Business Process",
              key: "BusinessProcess",
            },
            {
              label: "Oral Communication",
              key: "OralCommunication",
            },
          ],
        },
      ].map(({ list, label, key }) => (
        <React.Fragment key={label}>
          <div className="col-md-12 mt-3">
            <h6>{label}</h6>
            <hr class="mt-0"></hr>
          </div>
          {list.map((l) => (
            <>
              <div className="col-6">{l.key}</div>
              <div className="col-6">
                <fieldset className="rate">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <React.Fragment key={`${key}-${star}`}>
                      <input
                        type="radio"
                        id={`${key}-${star}`}
                        name={`rating[${key}]`}
                        className="stars"
                        checked={ratings[key] === star}
                        onChange={() => handleRatingChange(l.key, star)}
                      />
                      <label
                        htmlFor={`${key}-${star}`}
                        className="full"
                        title={`${
                          star === 5
                            ? "Awesome"
                            : star === 4
                            ? "Pretty good"
                            : star === 3
                            ? "Meh"
                            : star === 2
                            ? "Kinda bad"
                            : "Sucks big time"
                        } - ${star} stars`}
                      />
                    </React.Fragment>
                  ))}
                </fieldset>
              </div>
            </>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CompetencyRating;
