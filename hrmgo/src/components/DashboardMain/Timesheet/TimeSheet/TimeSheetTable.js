import React from "react";

import { Link } from "react-router-dom";

import { HiOutlineTrash } from "react-icons/hi2";
import { TbPencil } from "react-icons/tb";

const TimeSheetTable = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <div className="card-body py-0">
              <div className="table-responsive">
                <table className="table" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Hours</th>
                      <th>Remark</th>
                      <th width="200ox">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Julie Lynn </td>
                      <td>Sep 5, 2023</td>
                      <td>8</td>
                      <td>Lorem Ipsum, Or Lipsum</td>
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm  align-items-center"
                              data-url="/timesheet/2/edit"
                              data-ajax-popup="true"
                              data-size="md"
                              data-bs-toggle="tooltip"
                              title=""
                              data-title="Edit Timesheet"
                              data-bs-original-title="Edit"
                            >
                              <TbPencil className="text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action="/timesheet/2"
                              acceptCharset="UTF-8"
                              id="delete-form-2"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                defaultValue="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                defaultValue="PkWsnxq2y9e16vorGNKEE87OFJmCA4LLTQ1EdkSl"
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <HiOutlineTrash className="text-white text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Lunea Todd</td>
                      <td>Oct 4, 2023</td>
                      <td>5</td>
                      <td>Lorem Ipsum, Or Lipsum</td>
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm  align-items-center"
                              data-url="/timesheet/3/edit"
                              data-ajax-popup="true"
                              data-size="md"
                              data-bs-toggle="tooltip"
                              title=""
                              data-title="Edit Timesheet"
                              data-bs-original-title="Edit"
                            >
                              <i className="ti ti-pencil text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action="/timesheet/3"
                              acceptCharset="UTF-8"
                              id="delete-form-3"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                defaultValue="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                defaultValue="PkWsnxq2y9e16vorGNKEE87OFJmCA4LLTQ1EdkSl"
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="ti ti-trash text-white text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ida F. Mullen</td>
                      <td>Dec 5, 2023</td>
                      <td>8</td>
                      <td>Lorem Ipsum, Or Lipsum</td>
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm  align-items-center"
                              data-url="/timesheet/4/edit"
                              data-ajax-popup="true"
                              data-size="md"
                              data-bs-toggle="tooltip"
                              title=""
                              data-title="Edit Timesheet"
                              data-bs-original-title="Edit"
                            >
                              <i className="ti ti-pencil text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action="/timesheet/4"
                              acceptCharset="UTF-8"
                              id="delete-form-4"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                defaultValue="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                defaultValue="PkWsnxq2y9e16vorGNKEE87OFJmCA4LLTQ1EdkSl"
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="ti ti-trash text-white text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Teresa R McRae</td>
                      <td>Nov 3, 2023</td>
                      <td>10</td>
                      <td>Lorem Ipsum, Or Lipsum</td>
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm  align-items-center"
                              data-url="/timesheet/5/edit"
                              data-ajax-popup="true"
                              data-size="md"
                              data-bs-toggle="tooltip"
                              title=""
                              data-title="Edit Timesheet"
                              data-bs-original-title="Edit"
                            >
                              <i className="ti ti-pencil text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action="/timesheet/5"
                              acceptCharset="UTF-8"
                              id="delete-form-5"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                defaultValue="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                defaultValue="PkWsnxq2y9e16vorGNKEE87OFJmCA4LLTQ1EdkSl"
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="ti ti-trash text-white text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Julie Lynn </td>
                      <td>Sep 25, 2024</td>
                      <td>10</td>
                      <td />
                      <td className="Action">
                        <span>
                          <div className="action-btn bg-info ms-2">
                            <Link
                              to="/"
                              className="mx-3 btn btn-sm  align-items-center"
                              data-url="/timesheet/6/edit"
                              data-ajax-popup="true"
                              data-size="md"
                              data-bs-toggle="tooltip"
                              title=""
                              data-title="Edit Timesheet"
                              data-bs-original-title="Edit"
                            >
                              <i className="ti ti-pencil text-white" />
                            </Link>
                          </div>
                          <div className="action-btn bg-danger ms-2">
                            <form
                              method="POST"
                              action="/timesheet/6"
                              acceptCharset="UTF-8"
                              id="delete-form-6"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                defaultValue="DELETE"
                              />
                              <input
                                name="_token"
                                type="hidden"
                                defaultValue="PkWsnxq2y9e16vorGNKEE87OFJmCA4LLTQ1EdkSl"
                              />
                              <Link
                                to="/"
                                className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i className="ti ti-trash text-white text-white" />
                              </Link>
                            </form>
                          </div>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSheetTable;
