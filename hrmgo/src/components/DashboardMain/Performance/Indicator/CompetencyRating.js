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
        { label: "Leadership", key: "leadership" },
        { label: "Project Management", key: "projectManagement" },
        { label: "Allocating Resources", key: "allocatingResources" },
        { label: "Business Process", key: "businessProcess" },
        { label: "Oral Communication", key: "oralCommunication" },
      ].map(({ label, key }) => (
        <React.Fragment key={key}>
          <div className="col-6">{label}</div>
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
                    onChange={() => handleRatingChange(key, star)}
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default CompetencyRating;
