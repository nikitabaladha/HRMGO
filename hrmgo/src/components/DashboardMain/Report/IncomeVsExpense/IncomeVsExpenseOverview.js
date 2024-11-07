// components/DashboardMain/Report/IncomeVsExpense/IncomeVsExpenseHeader.js

import React from "react";

import { FaRegFileAlt } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";

// Card data configuration
const cardData = [
  {
    title: "Report",
    subtitle: "Income vs Expense Summary",
    icon: <FaRegFileAlt />,
    bgClass: "bg-primary",
    hiddenValue: "Income vs Expense Report of Nov-2024 to Jun-2024",
  },
  {
    title: "Duration",
    subtitle: "Nov-2024 to Jun-2024",
    icon: <TbCalendarClock />,
    bgClass: "bg-secondary",
    hiddenValue: "",
  },
  {
    title: "Total Income",
    subtitle: "$100.00",
    icon: <LuWallet />,
    bgClass: "bg-primary",
    hiddenValue: "",
  },
  {
    title: "Total Expense",
    subtitle: "$100.00",
    icon: <TbReportMoney />,
    bgClass: "bg-secondary",
    hiddenValue: "",
  },
];

const IncomeVsExpenseOverview = () => {
  return (
    <>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className={`theme-avtar ${card.bgClass}`}>
                      {card.icon}
                    </div>
                    {card.hiddenValue && (
                      <input
                        type="hidden"
                        defaultValue={card.hiddenValue}
                        id="filename"
                      />
                    )}
                    <div className="ms-3">
                      <h5 className="mb-0">{card.title}</h5>
                      <p className="text-muted text-sm mb-0">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IncomeVsExpenseOverview;
