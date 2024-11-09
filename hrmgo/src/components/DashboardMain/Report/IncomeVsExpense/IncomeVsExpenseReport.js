import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";

const formatMonthYear = (monthYear) => {
  const [year, month] = monthYear.split("-");
  const date = new Date(year, month - 1);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("en-US", options);
};

const IncomeVsExpenseReport = ({ data, startMonth, endMonth }) => {
  // Card data configuration

  const totalIncome = data.reduce((sum, item) => sum + item.incomeData, 0);
  const totalExpense = data.reduce((sum, item) => sum + item.expenseData, 0);

  const formattedStartMonth = formatMonthYear(startMonth);
  const formattedEndMonth = formatMonthYear(endMonth);

  const cardData = [
    {
      title: "Report",
      subtitle: "Income vs Expense Summary",
      icon: <FaRegFileAlt />,
      bgClass: "bg-primary",
    },
    {
      title: "Duration",
      subtitle: `${formattedStartMonth} to ${formattedEndMonth}`,
      icon: <TbCalendarClock />,
      bgClass: "bg-secondary",
    },
    {
      title: "Total Income",
      subtitle: `₹ ${totalIncome.toFixed(2)}`,
      icon: <LuWallet />,
      bgClass: "bg-primary",
    },
    {
      title: "Total Expense",
      subtitle: `₹ ${totalExpense.toFixed(2)}`,
      icon: <TbReportMoney />,
      bgClass: "bg-secondary",
    },
  ];
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

export default IncomeVsExpenseReport;
