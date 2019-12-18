import React, { useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar
} from "recharts";
import { useState } from "react";

const ServiceExpenseChart = ({ previousStep }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const type = previousStep.value;
      const url = `${process.env.REACT_APP_BASE_URL}/indirect_expense/${type}`;
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(url, headers);
      const { result } = await response.json();
      console.log(result);
      setData(result.map(item => ({
        name: item.Vehicle_Number,
        finalBillAmount: item['Final Bill Amount']
      })));
    }
    fetchData();
  }, [previousStep.value]);

  return (
    <div>
      <BarChart
        width={450}
        height={250}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="finalBillAmount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ServiceExpenseChart;
