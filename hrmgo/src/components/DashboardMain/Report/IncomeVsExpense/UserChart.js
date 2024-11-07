import React from "react";
import Chart from "react-apexcharts";

const UserChart = () => {
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
      categories: [
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
      ],
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
      borderColor: "#e0e0e0", // Color of the grid lines
      strokeDashArray: 4, // Makes the lines dashed
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4, // Ensures intervals of 30
      labels: {
        formatter: function (val) {
          return val.toFixed(0); // Display without decimal points
        },
      },
    },
  };

  const series = [
    {
      name: "Income",
      data: [100, 90, 80, 70, 60, 50],
    },
    {
      name: "Expense",
      data: [50, 60, 70, 80, 90, 100],
    },
  ];

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="rounded p-3">
          <div id="user-chart" style={{ minHeight: "265px" }}>
            <Chart options={options} series={series} type="bar" height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
