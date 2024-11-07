import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import DashboardMain from "./components/DashboardMain/DashboardMain";
import Overview from "./components/DashboardMain/Overview/Overview";
import IncomeVsExpense from "./components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js";
import MonthlyAttendance from "./components/DashboardMain/Report/MonthlyAttendance/MonthlyAttendance.js";
import Leave from "./components/DashboardMain/Report/Leave/Leave";

const AppRoutes = ({ isAuthenticated, handleLogin }) => {
  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route
              path="report/income-vs-expense"
              element={<IncomeVsExpense />}
            />
            <Route
              path="report/monthly-attendance"
              element={<MonthlyAttendance />}
            />
            <Route path="report/leave" element={<Leave />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
