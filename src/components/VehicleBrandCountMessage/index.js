import React, { useState, useEffect } from "react";

const BRAND_NAMES = ["Tata", "Eicher", "Ashok Leyland"];

const VehicleBrandCountMessage = ({ previousStep, steps }) => {
  const [vehicleCount, setVehicleCount] = useState("");
  const [brandName, setBrandName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const brandName = steps.multiOptions.value;
      const url = BRAND_NAMES.includes(brandName)
        ? `${process.env.REACT_APP_BASE_URL}/vehiclebrandcount/${brandName}`
        : `${process.env.REACT_APP_BASE_URL}/vehiclecount`;
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(url, headers);
      const { result } = await response.json();
      setVehicleCount(result);
      setBrandName(brandName);
    }
    fetchData();
  }, []);

  return (
    <div>
      Total vehicle count{" "}
      {BRAND_NAMES.includes(brandName) &&
        `for ${brandName}`}{" "}
      is {vehicleCount}
    </div>
  );
};

export default VehicleBrandCountMessage;
