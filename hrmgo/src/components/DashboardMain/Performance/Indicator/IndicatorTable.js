import React from "react";
import { Link } from "react-router-dom";
import { TiEyeOutline } from "react-icons/ti";
import { LuPencil } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

const IndicatorTable = () => {
  // Sample data array with dynamic values
  const indicators = [
    {
      id: 1,
      branch: "China",
      department: "Industrials",
      designation: "Manager",
      rating: 3.8,
      addedBy: "WorkDo",
      createdAt: "Nov 28, 2024",
    },
    {
      id: 2,
      branch: "China",
      department: "Health care",
      designation: "CEO",
      rating: 3.2,
      addedBy: "WorkDo",
      createdAt: "Dec 8, 2024",
    },
    {
      id: 3,
      branch: "India",
      department: "Telecommunications",
      designation: "Telecom Specialist",
      rating: 3.6,
      addedBy: "WorkDo",
      createdAt: "Nov 8, 2024",
    },
  ];

  // Function to render the dynamic stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="text-warning fas fa-star" />);
    }
    if (halfStar) {
      stars.push(
        <i key="half" className="text-warning fas fa-star-half-alt" />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fas fa-star" />);
    }

    return (
      <>
        {stars}
        <span className="theme-text-color">({rating})</span>
      </>
    );
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <div className="table-responsive">
              <table className="table" id="pc-dt-simple">
                <thead>
                  <tr>
                    <th>Branch</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Overall Rating</th>
                    <th>Added By</th>
                    <th>Created At</th>
                    <th width="200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {indicators.map((indicator) => (
                    <tr key={indicator.id}>
                      <td>{indicator.branch}</td>
                      <td>{indicator.department}</td>
                      <td>{indicator.designation}</td>
                      <td>{renderStars(indicator.rating)}</td>
                      <td>{indicator.addedBy}</td>
                      <td>{indicator.createdAt}</td>
                      <td className="Action">
                        <div className="dt-buttons">
                          <span>
                            <div className="action-btn bg-warning me-2">
                              <Link
                                to="#"
                                className="mx-3 btn btn-sm align-items-center"
                                data-size="lg"
                                data-url={`https://demo.workdo.io/hrmgo/indicator/${indicator.id}`}
                                data-ajax-popup="true"
                                data-bs-toggle="tooltip"
                                title="Indicator Detail"
                                data-bs-original-title="View"
                              >
                                <span className="text-white">
                                  {/* <i className="ti ti-eye" /> */}
                                  <TiEyeOutline />
                                </span>
                              </Link>
                            </div>
                            <div className="action-btn bg-info me-2">
                              <Link
                                to="#"
                                className="mx-3 btn btn-sm align-items-center"
                                data-size="lg"
                                data-url={`https://demo.workdo.io/hrmgo/indicator/${indicator.id}/edit`}
                                data-ajax-popup="true"
                                data-bs-toggle="tooltip"
                                title="Edit Indicator"
                                data-bs-original-title="Edit"
                              >
                                <span className="text-white">
                                  <LuPencil />
                                </span>
                              </Link>
                            </div>
                            <div className="action-btn bg-danger">
                              <form
                                method="POST"
                                action={`https://demo.workdo.io/hrmgo/indicator/${indicator.id}`}
                                acceptCharset="UTF-8"
                                id={`delete-form-${indicator.id}`}
                              >
                                <input
                                  name="_method"
                                  type="hidden"
                                  defaultValue="DELETE"
                                />
                                <input
                                  name="_token"
                                  type="hidden"
                                  defaultValue="bv9JuUGnlZvo4e2tk0j8suLlMwPqxJ5lEkHaMTor"
                                />
                                <Link
                                  to="#"
                                  className="mx-3 btn btn-sm align-items-center bs-pass-para"
                                  data-bs-toggle="tooltip"
                                  title="Delete"
                                  data-bs-original-title="Delete"
                                  aria-label="Delete"
                                >
                                  <span className="text-white">
                                    <LuTrash2 />
                                  </span>
                                </Link>
                              </form>
                            </div>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorTable;
