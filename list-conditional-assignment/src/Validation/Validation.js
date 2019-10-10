import React from "react";

const validation = props => {
  let displayText = "Text too short";

  if (props.len > 5) {
    displayText = "Text long enough ";
  }

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default validation;
