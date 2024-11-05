// src/routes/AppRoutes.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const routes = ({ isAuthenticated, handleLogin }) => {
  return (
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
  );
};

export default routes;
