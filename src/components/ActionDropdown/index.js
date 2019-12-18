import React from "react";
import "./style.css";

const ActionDropdown = ({
  title,
  options,
  isOpen,
  openSection,
  handleNextStep
}) => {
  return (
    <div className="action-dropdown-container">
      <div
        className="action-dropdown-header"
        onClick={() => openSection(title)}
      >
        <h3 className="action-dropdown-title">{title}</h3>
        <span className={`action-dropdown-${isOpen ? "open" : "close"}`}>
          >
        </span>
      </div>
      {isOpen ? (
        <div className="options-container">
          {options.map(item => (
            <p
              key={item.id}
              className="action-dropdown-option"
              onClick={() => handleNextStep(item.trigger, item.value)}
            >
              {item.title}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ActionDropdown;
