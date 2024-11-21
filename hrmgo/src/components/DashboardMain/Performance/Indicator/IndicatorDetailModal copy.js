// import React from "react";

// import "react-toastify/dist/ReactToastify.css";

// const IndicatorDetailModal = ({ closeModal }) => {
//   return (
//     <>
//       <div
//         className="modal fade show"
//         id="commonModal"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         style={{ display: "block" }}
//         aria-modal="true"
//         role="dialog"
//       >
//         <div className="modal-dialog modal-lg" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Indicator Detail{" "}
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="body ">
//               <div className="modal-body">
//                 <div className="row py-4">
//                   <div className="col-md-12 ">
//                     <div className="info text-sm">
//                       <strong>Branch : </strong>
//                       <span>China</span>
//                     </div>
//                   </div>
//                   <div className="col-md-12 mt-2">
//                     <div className="info text-sm font-style">
//                       <strong>Department : </strong>
//                       <span>Industrials</span>
//                     </div>
//                   </div>
//                   <div className="col-md-12 mt-3">
//                     <div className="info text-sm font-style">
//                       <strong>Designation : </strong>
//                       <span>Manager</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-12 mt-3">
//                     <h6>Organizational Competencies</h6>
//                     <hr className="mt-0" />
//                   </div>
//                   <div className="col-6">Leadership</div>
//                   <div className="col-6">
//                     <fieldset id="demo1" className="rate">
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-5-3"
//                         name="rating[3]"
//                         defaultValue={5}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-5-3"
//                         title="Awesome - 5 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-4-3"
//                         name="rating[3]"
//                         defaultValue={4}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-4-3"
//                         title="Pretty good - 4 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-3-3"
//                         name="rating[3]"
//                         defaultValue={3}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-3-3"
//                         title="Meh - 3 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-2-3"
//                         name="rating[3]"
//                         defaultValue={2}
//                         defaultChecked=""
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-2-3"
//                         title="Kinda bad - 2 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-1-3"
//                         name="rating[3]"
//                         defaultValue={1}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-1-3"
//                         title="Sucks big time - 1 star"
//                       />
//                     </fieldset>
//                   </div>
//                   <div className="col-6">Project Management</div>
//                   <div className="col-6">
//                     <fieldset id="demo1" className="rate">
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-5-5"
//                         name="rating[5]"
//                         defaultValue={5}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-5-5"
//                         title="Awesome - 5 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-4-5"
//                         name="rating[5]"
//                         defaultValue={4}
//                         defaultChecked=""
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-4-5"
//                         title="Pretty good - 4 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-3-5"
//                         name="rating[5]"
//                         defaultValue={3}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-3-5"
//                         title="Meh - 3 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-2-5"
//                         name="rating[5]"
//                         defaultValue={2}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-2-5"
//                         title="Kinda bad - 2 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-1-5"
//                         name="rating[5]"
//                         defaultValue={1}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-1-5"
//                         title="Sucks big time - 1 star"
//                       />
//                     </fieldset>
//                   </div>
//                   <div className="col-md-12 mt-3">
//                     <h6>Technical Competencies</h6>
//                     <hr className="mt-0" />
//                   </div>
//                   <div className="col-6">Allocating Resources</div>
//                   <div className="col-6">
//                     <fieldset id="demo1" className="rate">
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-5-1"
//                         name="rating[1]"
//                         defaultValue={5}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-5-1"
//                         title="Awesome - 5 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-4-1"
//                         name="rating[1]"
//                         defaultValue={4}
//                         defaultChecked=""
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-4-1"
//                         title="Pretty good - 4 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-3-1"
//                         name="rating[1]"
//                         defaultValue={3}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-3-1"
//                         title="Meh - 3 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-2-1"
//                         name="rating[1]"
//                         defaultValue={2}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-2-1"
//                         title="Kinda bad - 2 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-1-1"
//                         name="rating[1]"
//                         defaultValue={1}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-1-1"
//                         title="Sucks big time - 1 star"
//                       />
//                     </fieldset>
//                   </div>
//                   <div className="col-md-12 mt-3">
//                     <h6>Behavioural Competencies</h6>
//                     <hr className="mt-0" />
//                   </div>
//                   <div className="col-6">Business Process</div>
//                   <div className="col-6">
//                     <fieldset id="demo1" className="rate">
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-5-2"
//                         name="rating[2]"
//                         defaultValue={5}
//                         defaultChecked=""
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-5-2"
//                         title="Awesome - 5 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-4-2"
//                         name="rating[2]"
//                         defaultValue={4}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-4-2"
//                         title="Pretty good - 4 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-3-2"
//                         name="rating[2]"
//                         defaultValue={3}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-3-2"
//                         title="Meh - 3 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-2-2"
//                         name="rating[2]"
//                         defaultValue={2}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-2-2"
//                         title="Kinda bad - 2 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-1-2"
//                         name="rating[2]"
//                         defaultValue={1}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-1-2"
//                         title="Sucks big time - 1 star"
//                       />
//                     </fieldset>
//                   </div>
//                   <div className="col-6">Oral Communication</div>
//                   <div className="col-6">
//                     <fieldset id="demo1" className="rate">
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-5-4"
//                         name="rating[4]"
//                         defaultValue={5}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-5-4"
//                         title="Awesome - 5 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-4-4"
//                         name="rating[4]"
//                         defaultValue={4}
//                         defaultChecked=""
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-4-4"
//                         title="Pretty good - 4 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-3-4"
//                         name="rating[4]"
//                         defaultValue={3}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-3-4"
//                         title="Meh - 3 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-2-4"
//                         name="rating[4]"
//                         defaultValue={2}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-2-4"
//                         title="Kinda bad - 2 stars"
//                       />
//                       <input
//                         className="stars"
//                         type="radio"
//                         id="technical-1-4"
//                         name="rating[4]"
//                         defaultValue={1}
//                         disabled=""
//                       />
//                       <label
//                         className="full"
//                         htmlFor="technical-1-4"
//                         title="Sucks big time - 1 star"
//                       />
//                     </fieldset>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndicatorDetailModal;

import React from "react";
import "react-toastify/dist/ReactToastify.css";

const IndicatorDetailModal = ({ indicator, closeModal }) => {
  console.log("indicator", indicator);

  //   i am getting data perfectly from indicator and it works perfectly fine for branch, department,designation  but
  if (!indicator || !indicator.competencies) {
    return <div> null</div>;

    // I am getting null from here
  }
  return (
    <>
      <div
        className="modal fade show"
        id="commonModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Indicator Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="body ">
              <div className="modal-body">
                <div className="row py-4">
                  <div className="col-md-12 ">
                    <div className="info text-sm">
                      <strong>Branch : </strong>
                      <span>{indicator.branch}</span>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div className="info text-sm font-style">
                      <strong>Department : </strong>
                      <span>{indicator.department}</span>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="info text-sm font-style">
                      <strong>Designation : </strong>
                      <span>{indicator.designation}</span>
                    </div>
                  </div>
                </div>

                {/* From the below part i am getting error  */}
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <h6>Organizational Competencies</h6>
                    <hr className="mt-0" />
                  </div>
                  {indicator.competencies.organizational.map(
                    (competency, index) => (
                      <React.Fragment key={index}>
                        <div className="col-6">{competency.name}</div>
                        <div className="col-6">
                          <fieldset className="rate">
                            {[1, 2, 3, 4, 5].map((ratingValue) => (
                              <React.Fragment key={ratingValue}>
                                <input
                                  className="stars"
                                  type="radio"
                                  id={`rating-org-${competency.name}-${ratingValue}`}
                                  name={`rating-org[${index}]`}
                                  value={ratingValue}
                                  disabled={true}
                                  defaultChecked={
                                    competency.rating === ratingValue
                                  }
                                />
                                <label
                                  className="full"
                                  htmlFor={`rating-org-${competency.name}-${ratingValue}`}
                                  title={`${ratingValue} star${
                                    ratingValue > 1 ? "s" : ""
                                  }`}
                                />
                              </React.Fragment>
                            ))}
                          </fieldset>
                        </div>
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndicatorDetailModal;
