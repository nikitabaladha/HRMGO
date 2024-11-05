import React, { useState } from "react";
import postAPI from "../../api/postAPI.js";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postAPI("/login", formData, false);

      if (!response.hasError) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "userDetails",
          JSON.stringify(response.data.userDetails)
        );
        onLogin();
      } else {
        setGeneralError(response.data.message);
      }
    } catch (error) {
      setGeneralError(
        error?.response?.data?.message ||
          "An unexpected login error occurred. Please try again."
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {generalError && <p className="error-message">{generalError}</p>}
        <button type="submit">Login</button>
        <p>
          Don't have an account ? <Link to="/signup">Signup </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
