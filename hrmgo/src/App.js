import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "cookieconsent/build/cookieconsent.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "choices.js/public/assets/styles/choices.css";
import "react-datepicker/dist/react-datepicker.css";

import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";

import "./assets/css/plugins/style.css";
import "./assets/css/customizer.css";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
