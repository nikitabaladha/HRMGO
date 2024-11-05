import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

import postAPI from "../../api/postAPI.js";

import "./custom-login.css";

import logo from "../../uploads/logo/logo-dark-cbaaeb18eba8e.png";
import background1 from "../../uploads/svg/login-1.svg";
import background2 from "../../uploads/svg/login-2.svg";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [generalError, setGeneralError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setGeneralError("");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postAPI("/signup", formData, false);

      if (!response.hasError) {
        handleLoginRedirect();
        console.log("Signup successful");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
        });
      } else {
        setGeneralError(response.message);
      }
    } catch (error) {
      setGeneralError(
        error?.response?.data?.message ||
          "An unexpected signup error occurred. Please try again."
      );
    }
  };

  return (
    <div className="custom-login">
      <div className="login-bg-img">
        <img src={background1} className="login-bg-1" alt="Background 1" />
        <img src={background2} className="login-bg-2" alt="Background 2" />
      </div>
      <div className="bg-login bg-primary"></div>
      <div className="custom-login-inner">
        <header className="dash-header">
          <nav className="navbar navbar-expand-md default">
            <div className="container">
              <div className="navbar-brand">
                <Link to="#">
                  <img src={logo} alt="HRMGo" loading="lazy" className="logo" />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarlogin"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarlogin">
                <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://demo.workdo.io/hrmgo/pages/about_us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://demo.workdo.io/hrmgo/pages/terms_and_conditions"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://demo.workdo.io/hrmgo/pages/privacy_policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <div className="lang-dropdown-only-desk">
                    <li className="dropdown dash-h-item drp-language">
                      <Link
                        className="dash-head-link dropdown-toggle btn"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="drp-text">
                          English
                          <MdKeyboardArrowDown className="dropdown-icon" />
                        </span>
                      </Link>
                      <div className="dropdown-menu dash-h-dropdown dropdown-menu-end">
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/ar"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Arabic</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/zh"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Chinese</span>
                        </Link>
                        <Link
                          href="https://demo.workdo.io/hrmgo/login/da"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Danish</span>
                        </Link>
                        <Link
                          href="https://demo.workdo.io/hrmgo/login/de"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>German</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/en"
                          tabIndex={0}
                          className="dropdown-item active"
                        >
                          <span>English</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/es"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Spanish</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/fr"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>French</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/he"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Hebrew</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/it"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Italian</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/ja"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Japanese</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/nl"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Dutch</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/pl"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Polish</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/pt"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Portuguese</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/ru"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Russian</span>
                        </Link>
                        <Link
                          to="https://demo.workdo.io/hrmgo/login/tr"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Turkish</span>
                        </Link>
                        <Link
                          href="https://demo.workdo.io/hrmgo/login/pt-br"
                          tabIndex={0}
                          className="dropdown-item "
                        >
                          <span>Portuguese(Brazil)</span>
                        </Link>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="custom-wrapper">
          <div className="custom-row">
            <div className="card">
              <div className="card-body">
                <h2 className="mb-3 f-w-600">Signup</h2>
                <div className="custom-login-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-3 pss-field">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-3 pss-field">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        required=""
                      />
                    </div>

                    <div className="form-group mb-3 pss-field">
                      <label className="form-label">Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required=""
                        className="form-control"
                      >
                        <option value="">Select Role</option>
                        <option value="company">Company</option>
                        <option value="hr">HR</option>
                        <option value="employee">Employee</option>
                      </select>
                    </div>

                    {generalError && (
                      <p className="error-message">{generalError}</p>
                    )}
                    <div className="d-grid">
                      <button
                        className="btn btn-primary login-do-btn"
                        type="submit"
                      >
                        Signup
                      </button>
                    </div>

                    <p className="mt-4">Already have an account ?</p>
                    <div className="d-grid">
                      <button
                        className="btn btn-info login-do-btn"
                        type="submit"
                        onClick={handleLoginRedirect}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="auth-footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <span>© 2024 HRMGo</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
