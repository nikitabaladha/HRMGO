import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "cookieconsent/build/cookieconsent.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "choices.js/public/assets/styles/choices.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";
import "react-perfect-scrollbar/dist/css/styles.css";

import "./assets/css/customizer.css";
import "./assets/css/plugins/style.css";
import "./assets/css/plugins/main.css";
import "./css/custom.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = JSON.parse(localStorage.getItem("accessToken"));
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
