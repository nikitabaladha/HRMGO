import React from "react";

// Sample data structure for employees and their AccountStatement
const employees = [
  {
    name: "Julie Lynn",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Lunea Todd",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Ida F. Mullen",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Abra Stevens",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Julie Lynn",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Lunea Todd",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Ida F. Mullen",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Abra Stevens",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Julie Lynn",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Lunea Todd",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Ida F. Mullen",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
  {
    name: "Abra Stevens",
    AccountStatement: Array(30).fill(""), // 30 days of empty AccountStatement
  },
];

const AccountStatementTable = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <div className="table-responsive">
              <table className="table" id="pc-dt-simple">
                <thead>
                  <tr>
                    <th>Account</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Benjamin Adams</td>
                    <td>Oct 28, 2023</td>
                    <td>$1,000.00</td>
                  </tr>
                  <tr>
                    <td>Benjamin Adams</td>
                    <td>Sep 26, 2023</td>
                    <td>$500.00</td>
                  </tr>
                  <tr>
                    <td>Chisom Latifat</td>
                    <td>Dec 12, 2023</td>
                    <td>$12,000.00</td>
                  </tr>
                  <tr>
                    <td>Earl Hane MD</td>
                    <td>Nov 10, 2022</td>
                    <td>$500.00</td>
                  </tr>
                  <tr>
                    <td>Benjamin Adams</td>
                    <td>Sep 25, 2024</td>
                    <td>$100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountStatementTable;
