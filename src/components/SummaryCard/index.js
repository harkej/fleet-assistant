import React, { useState, useEffect } from "react";
import "./style.css";
import { getBusinessSummary } from "../../services";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const SUMMARY_TYPE = ["year", "month"];

function SummaryCard({ previousStep }) {
  const [summaryData, setSummaryData] = useState({});

  const summaryType = previousStep.value || "month";

  useEffect(() => {
    getBusinessSummary(
      summaryType === "month" ? "this month" : "this year"
    ).then(resp => {
      handleResponse(resp);
    });
  }, [summaryType]);

  const handleResponse = response => {
    const { result } = response;
    setSummaryData(result || {});
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>
        Summary for{" "}
        {summaryType === "month"
          ? MONTHS[summaryData.Month - 1]
          : summaryData.Year}
      </h3>
      <table>
        <tbody>
          <tr className="summary-table-row">
            <td>1. Trip Count</td>
            <td>{summaryData.Trip_Count}</td>
          </tr>
          <tr className="summary-table-row">
            <td>2. Distance Travelled (km)</td>
            <td>{summaryData.Km_Travelled}</td>
          </tr>
          <tr className="summary-table-row">
            <td>3. Fuel Consumed (ltr)</td>
            <td>{summaryData.Fuel_Trip_Consumed_Litres}</td>
          </tr>
          <tr className="summary-table-row">
            <td>4. Freight Transported (ton)</td>
            <td>{summaryData.Total_Ton_Transported}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SummaryCard;
