//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React from "react";

import IncomeVsExpenseHeader from "./IncomVsExpenseHeader";
import IncomeVsExpenseSearchForm from "./IncomeVsExpenseSearchForm";
import IncomeVsExpenseReport from "./IncomeVsExpenseReport";
import IncomeVsExpenseChart from "./IncomeVsExpenseChart";

const IncomeVsExpense = () => {
  return (
    <>
      {/* first row */}
      <IncomeVsExpenseHeader />

      {/* Second row */}
      <div className="row">
        {" "}
        <IncomeVsExpenseSearchForm />
        {/* Third row  */}
        <div id="printableArea">
          <IncomeVsExpenseReport />

          {/* Fourth row */}
          <IncomeVsExpenseChart />
        </div>
      </div>
    </>
  );
};

export default IncomeVsExpense;
