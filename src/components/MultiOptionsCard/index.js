import React, { useState } from "react";
import ActionDropdown from "../ActionDropdown";
import "./style.css";

const optionsData = [
  {
    id: 1,
    title: "Business Summary",
    options: [
      {
        id: 11,
        title: "View summary for this year",
        trigger: 'businessSummaryDetails',
        value: 'year',
      },
      {
        id: 12,
        title: "View summary for this month",
        trigger: 'businessSummaryDetails',
        value: 'month',
      }
    ]
  },
  {
    id: 2,
    title: 'Business Categories',
    options: [
      {
        id: 21,
        title: 'Trip Details',
        trigger: 'tripDetailsOptionsPrompt'
      },
      {
        id: 22,
        title: 'Indirect Expense',
      },
      {
        id: 23,
        title: 'Direct Expense',
      },
    ],
  },
  {
    id: 3,
    title: "Vehicle Count",
    options: [
      {
        id: 31,
        title: "View total count",
        trigger: 'vehicleBrandCount',
        value: 'all',
      },
      {
        id: 32,
        title: "View vehicle count for Tata",
        trigger: 'vehicleBrandCount',
        value: 'Tata',
      },
      {
        id: 33,
        title: "View vehicle count for Eicher",
        trigger: 'vehicleBrandCount',
        value: 'Eicher',
      },
      {
        id: 34,
        title: "View vehicle count for Ashok Leyland",
        trigger: 'vehicleBrandCount',
        value: 'Ashok Leyland',
      }
    ]
  }
];

const MultiOptionsCard = ({ triggerNextStep }) => {
  const [isSectionOpen, setIsSectionOpen] = useState({});

  const handleNextStep = (trigger, value) => {
    triggerNextStep({ trigger, value });
  };

  return (
    <div className="multi-options-container">
      <h3 className="multi-options-title">Select an option below</h3>
      {optionsData.map(item => (
        <ActionDropdown
          key={item.id}
          title={item.title}
          options={item.options}
          isOpen={isSectionOpen[item.title]}
          openSection={title =>
            setIsSectionOpen({
              // ...isSectionOpen,
              [title]: !isSectionOpen[title]
            })
          }
          handleNextStep={handleNextStep}
        />
      ))}
    </div>
  );
};

export default MultiOptionsCard;
