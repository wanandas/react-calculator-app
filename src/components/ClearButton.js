import React from "react";
import "./ClearButton.css";

const ClearButton = props => {
  return <div className="clear-btn" onClick={() => props.handleClear()}></div>;
};

export default ClearButton;
