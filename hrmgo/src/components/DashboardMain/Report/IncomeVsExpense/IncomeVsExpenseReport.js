import React, { useEffect, useState } from "react";
import getAPI from "../../../../api/getAPI.js";
import { FaRegFileAlt } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";

const iconMap = [
  <FaRegFileAlt />,
  <TbCalendarClock />,
  <LuWallet />,
  <TbReportMoney />,
];

const IncomeVsExpenseReport = () => {
  const [incomeVsExpenseReport, setIncomeVsExpenseReport] = useState([]);

  useEffect(() => {
    const fetchIncomeVsExpenseReport = async () => {
      try {
        // Fetch data from the backend
        const response = await getAPI(
          "/income-expense-report-get-all",
          {},
          true
        );

        // Check for error and ensure response contains the expected data
        if (
          !response.hasError &&
          response.data &&
          Array.isArray(response.data.data)
        ) {
          setIncomeVsExpenseReport(response.data.data);
          console.log(
            "Income Vs ExpenseReport fetched successfully",
            response.data.data
          );
        } else {
          console.error("Invalid response format or error in response");
        }
      } catch (err) {
        console.error("Error fetching metrics:", err);
      }
    };

    fetchIncomeVsExpenseReport();
  }, []);

  // Function to determine default color based on the metric's index
  const getIncomeVsExpenseReportColor = (index) => {
    switch (index) {
      case 0:
      case 2:
        return "bg-primary";
      case 1:
      case 3:
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };

  // Define an array of card information to avoid repetitive code
  const cardDetails = [
    {
      title: "Report",
      value: incomeVsExpenseReport[0]?.title || "Loading...",
      icon: iconMap[0],
      color: getIncomeVsExpenseReportColor(0),
    },
    {
      title: "Duration",
      value: incomeVsExpenseReport[0]
        ? `${formatDate(
            incomeVsExpenseReport[0]?.duration?.start
          )} to ${formatDate(incomeVsExpenseReport[0]?.duration?.end)}`
        : "Loading...",
      icon: iconMap[1],
      color: getIncomeVsExpenseReportColor(1),
    },
    {
      title: "Total Income",
      value: incomeVsExpenseReport[0]
        ? `$${incomeVsExpenseReport[0]?.totalIncome.toLocaleString()}`
        : "Loading...",
      icon: iconMap[2],
      color: getIncomeVsExpenseReportColor(2),
    },
    {
      title: "Total Expense",
      value: incomeVsExpenseReport[0]
        ? `$${incomeVsExpenseReport[0]?.totalExpense.toLocaleString()}`
        : "Loading...",
      icon: iconMap[3],
      color: getIncomeVsExpenseReportColor(3),
    },
  ];

  return (
    <div className="row">
      {cardDetails.map((card, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center">
                <div className={`theme-avtar ${card.color} text-white`}>
                  {card.icon}
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">{card.title}</h5>
                  <p className="text-muted text-sm mb-0">{card.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncomeVsExpenseReport;
