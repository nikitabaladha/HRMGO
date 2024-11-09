//components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpense.js

import React from "react";

import IncomeVsExpenseHeader from "./IncomVsExpenseHeader";
import IncomeVsExpenseMonthHeader from "./IncomeVsExpenseMonthHeader";
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
        <IncomeVsExpenseMonthHeader />
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
