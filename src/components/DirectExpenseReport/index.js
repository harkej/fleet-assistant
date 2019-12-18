import React, { useEffect } from "react";
import { useState } from "react";

const DirectExpenseReport = ({ previousStep }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [directExpense, setDirectExpense] = useState("");

  useEffect(() => {
    async function fetchData() {
      const type = previousStep.value;
      const url = `${process.env.REACT_APP_BASE_URL}/direct_expense/${type}`;
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(url, headers);
      const { result } = await response.json();
      if (result) {
        setMonth(result[0].Trip_Month);
        setYear(result[0].Trip_Year);
        setDirectExpense(result[0].Total_Direct_Expense);
      }
    }
    fetchData();
  }, [previousStep.value]);

  return (
    <div>
      <p>Direct Expense Report</p>
      <p>
        {month ? `${month}, ` : ""}
        {year} - {directExpense}
      </p>
    </div>
  );
};

export default DirectExpenseReport;
