import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import VehicleBrandCountMessage from "../../components/VehicleBrandCountMessage";
import SummaryCard from "../../components/SummaryCard";
import "./style.css";
import MultiOptionsCard from "../../components/MultiOptionsCard";
import TripDetailsMessage from "../../components/TripDetailsMessage";

function App() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ? localStorage.getItem("userName") : ""
  );
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);

  const handleUserNameChange = value => {
    localStorage.setItem("userName", value);
    setUserName(value);
  };

  const steps = [
    {
      id: "0",
      message: userName
        ? `Welcome back, ${userName}!`
        : `Welcome, please enter your name to continue.`,
      // trigger: userName ? "basicSummary" : "promptName"
      trigger: userName ? "multiOptions" : "promptName"
    },
    {
      id: "multiOptions",
      component: <MultiOptionsCard />,
      // asMessage: true,
      replace: true
    },
    {
      id: "1",
      message: "What is your name?",
      trigger: "promptName"
    },
    {
      id: "promptName",
      user: true,
      trigger: ({ value }) => {
        handleUserNameChange(value);
        return "basicSummary";
      }
    },
    {
      id: "basicSummary",
      message: `Here is a summary of your business`,
      trigger: "businessSummaryDetails"
    },
    {
      id: "businessSummaryDetails",
      component: <SummaryCard />,
      asMessage: true,
      trigger: "multiOptions"
    },
    {
      id: "vehicleCount",
      component: <VehicleBrandCountMessage />,
      asMessage: true,
      trigger: "vehicleCountOptionsPrompt"
    },
    {
      id: "vehicleCountOptionsPrompt",
      message: "Do you want to view vehicle count by brand?",
      trigger: "showVehicleBrandOptions"
    },
    {
      id: "showVehicleBrandOptions",
      options: [
        { value: 1, label: "Yes", trigger: "vehicleCountOptions" },
        { value: 2, label: "No", trigger: "multiOptions" }
      ]
    },
    {
      id: "vehicleCountOptions",
      options: [
        {
          value: "Tata",
          label: "Tata",
          trigger: "vehicleBrandCount"
        },
        {
          value: "Eicher",
          label: "Eicher",
          trigger: "vehicleBrandCount"
        },
        {
          value: "Ashok Leyland",
          label: "Ashok Leyland",
          trigger: "vehicleBrandCount"
        }
      ],
      placeholder: "Enter some detail"
    },
    {
      id: "vehicleBrandCount",
      component: <VehicleBrandCountMessage />,
      asMessage: true,
      trigger: "multiOptions"
    },
    {
      id: "businessSummaryOptions",
      options: [
        {
          value: "month",
          label: "Month",
          trigger: "businessSummaryDetails"
        },
        {
          value: "year",
          label: "Year",
          trigger: "businessSummaryDetails"
        }
      ]
    },
    {
      id: "otherOptions",
      options: [
        { value: 1, label: "Vehicle Count", trigger: "vehicleCount" },
        {
          value: 2,
          label: "Business Summary",
          trigger: "businessSummaryOptions"
        },
        { value: 3, label: "Revenue Details", trigger: "otherOptions" }
      ]
    },
    {
      id: "tripDetailsOptionsPrompt",
      message: "Select an option below",
      trigger: "tripDetailsOptions"
    },
    {
      id: "tripDetailsOptions",
      options: [
        {
          value: "profit_margin_month_comparision",
          label: "Profit margin month comparison",
          trigger: "tripDetailsResult"
        },
        {
          value: "profit_margin_breakup",
          label: "Profit margin breakup",
          trigger: "tripDetailsResult"
        },
        {
          value: "top_3_vehicles_pm",
          label: "Top 3 vehicles with profit margin",
          trigger: "tripDetailsResult"
        },
        {
          value: "bottom_3_vehicles_pm",
          label: "Bottom 3 vehicles with profit margin",
          trigger: "tripDetailsResult"
        },
        {
          value: "trip_all_details",
          label: "All trip details",
          trigger: "tripDetailsResult"
        }
      ]
    },
    {
      id: "tripDetailsResult",
      component: <TripDetailsMessage />,
      asMessage: true
    }
  ];
  return (
    <div className="App">
      <ChatBot
        recognitionEnable
        speechSynthesis={{ enable: isSpeechEnabled, lang: "en" }}
        headerTitle={`Welcome${userName ? `, ${userName}` : ""}`}
        steps={steps}
        contentStyle={{ flexGrow: 1 }}
        enableMobileAutoFocus
        enableSmoothScroll
      />
    </div>
  );
}

export default App;
