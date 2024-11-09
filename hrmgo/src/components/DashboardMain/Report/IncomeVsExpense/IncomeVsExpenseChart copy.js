// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import getAPI from "../../../../api/getAPI.js";

// const IncomeVsExpenseChart = () => {
//   const [categories, setCategories] = useState([]);
//   const [series, setSeries] = useState([]);

//   const options = {
//     chart: {
//       type: "bar",
//       height: 250,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         endingShape: "rounded",
//         columnWidth: "30%",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       categories: categories || [],
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "right",
//       floating: true,
//       offsetY: -10,
//       offsetX: -5,
//       markers: {
//         width: 12,
//         height: 12,
//         radius: 2,
//         offsetX: -2,
//       },
//       itemMargin: {
//         horizontal: 5,
//         vertical: 10,
//       },
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//     fill: {
//       opacity: 1,
//     },
//     colors: ["#3EC9D6", "#FF3A6E"],
//     grid: {
//       borderColor: "#e0e0e0",
//       strokeDashArray: 4,
//     },
//     yaxis: {
//       min: 0,
//       max: 120,
//       tickAmount: 4,
//       labels: {
//         formatter: function (val) {
//           return val.toFixed(0);
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     const fetchIncomeVsExpenseChart = async () => {
//       try {
// const response = await getAPI(
//   `/income-expense-chart-get-all`,
//   {},
//   true
// );

//         if (!response.hasError && response.data) {
//           const fetchedCategories = response.data.data.categories || []; // Access categories directly
//           const incomeData = response.data.data.incomeData || []; // Access incomeData directly
//           const expenseData = response.data.data.expenseData || []; // Access expenseData directly

//           setCategories(fetchedCategories);
//           console.log("Categories:", response.data.data.categories);
//           console.log("Expenses:", expenseData);
//           console.log("Income:", incomeData);
//           setSeries([
//             { name: "Income", data: incomeData },
//             { name: "Expense", data: expenseData },
//           ]);
//           console.log(
//             "IncomeVsExpenseChart fetched successfully",
//             response.data
//           );
//         } else {
//           console.error("Invalid response format or error in response");
//         }
//       } catch (err) {
//         console.error("Error fetching IncomeVsExpenseChart:", err);
//       }
//     };

//     fetchIncomeVsExpenseChart();
//   }, []);

//   return (
//     <div className="col-md-12">
//       <div className="card">
//         <div className="rounded p-3">
//           <div id="user-chart" style={{ minHeight: "265px" }}>
//             {categories.length > 0 && series.length > 0 ? (
//               <Chart
//                 options={options}
//                 series={series}
//                 type="bar"
//                 height={250}
//               />
//             ) : (
//               <p>Loading data...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncomeVsExpenseChart;

import React from "react";
import Chart from "react-apexcharts";

const IncomeVsExpenseChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Nov 26", "Dec 26", "Jan 27", "Feb 27", "Mar 27", "Apr 27"],
      //  this is hardcoded but i want backend data here according to user select in search form
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -10,
      offsetX: -5,
      markers: {
        width: 12,
        height: 12,
        radius: 2,
        offsetX: -2,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    fill: {
      opacity: 1,
    },
    colors: ["#3EC9D6", "#FF3A6E"],
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  };

  const series = [
    { name: "Income", data: [20, 30, 40, 50, 60, 70] },
    { name: "Expense", data: [10, 20, 30, 40, 50, 60] },

    // this is hardcoded but i want backend data here according to user select in search form
  ];

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="rounded p-3">
          <div id="user-chart" style={{ minHeight: "300px" }}>
            <Chart options={options} series={series} type="bar" height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeVsExpenseChart;
