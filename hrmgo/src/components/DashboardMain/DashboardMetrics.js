import React from "react";

import DashboardMainHeader from "./DashboardMainHeader.js";

import { TbUsers } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
import { FaChromecast } from "react-icons/fa";

const DashboardMetrics = () => {
  const cardsData = [
    {
      title: "Staff",
      subtitle: "Total",
      icon: <TbUsers />,
      value: "24",
      color: "primary",
    },
    {
      title: "Ticket",
      subtitle: "Total",
      icon: <LuTicket />,
      value: "9",
      color: "info",
    },
    {
      title: "Account Balance",
      subtitle: "Total",
      icon: <LuWallet />,
      value: "₹2,045,619.00",
      color: "warning",
    },
    {
      title: "Jobs",
      subtitle: "Total",
      icon: <FaChromecast />,
      value: "4",
      color: "primary",
    },
    {
      title: "Active Jobs",
      subtitle: "Total",
      icon: <FaChromecast />,
      value: "4",
      color: "info",
    },
    {
      title: "Inactive Jobs",
      subtitle: "Total",
      icon: <FaChromecast />,
      value: "0",
      color: "warning",
    },
  ];

  return (
    <section className="dash-container">
      <div className="dash-content">
        {/* imported dashboard main header */}
        <DashboardMainHeader />

        {/* dashboard metrics starts */}
        <div className="row">
          <div className="col-xxl-12">
            <div className="row">
              {cardsData.map((card, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto mb-3 mb-sm-0">
                          <div className="d-flex align-items-center">
                            <div className={`theme-avtar bg-${card.color}`}>
                              {card.icon}
                            </div>
                            <div className="ms-3">
                              <small className="text-muted">
                                {card.subtitle}
                              </small>
                              <h6 className="m-0">{card.title}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <h4 className={`m-0 text-${card.color}`}>
                            {card.value}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMetrics;
