import React, { useState, useEffect } from "react";

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

const TripDetailsMessage = ({ previousStep }) => {
  const [tripDetails, setTripDetails] = useState({});
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const type = previousStep.value;
      const url = `${process.env.REACT_APP_BASE_URL}/trip/${type}`;
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(url, headers);
      const { result } = await response.json();
      // console.log(responseJson);
      if (result) {
        setTripDetails(result[0]);
        setBrandName(type);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h3>
        Summary for{" "}
        {`${MONTHS[tripDetails.Trip_Month - 1]} ${tripDetails.Trip_Year}`}
      </h3>
      <table>
        <tbody>
          <tr className="summary-table-row">
            <td>1. Previous month revenue</td>
            <td>{tripDetails.prev_month_revenue}</td>
          </tr>
          <tr className="summary-table-row">
            <td>2. Gross profit percentage</td>
            <td>{Math.round(tripDetails.Gross_Profit_Percentage)}</td>
          </tr>
          <tr className="summary-table-row">
            <td>3. Gross margin growth</td>
            <td>{tripDetails[`Gross_Margin_Growth%`]}</td>
          </tr>{" "}
        </tbody>
      </table>
    </div>
  );
};

export default TripDetailsMessage;
