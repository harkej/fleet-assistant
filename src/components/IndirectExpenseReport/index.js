import React from 'react'
import { useEffect } from 'react'

const IndirectExpenseReport = ({ previousStep }) => {
  useEffect(() => {
    async function fetchData() {
      const type = previousStep.value;
      const url = `${process.env.REACT_APP_BASE_URL}/indirect_expense/${type}`;
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(url, headers);
      const responseJson = await response.json();
      console.log(responseJson)
    }
    fetchData();
  }, [previousStep.value]);
  return (
    <div>
      Indirect expense report
    </div>
  )
}

export default IndirectExpenseReport
