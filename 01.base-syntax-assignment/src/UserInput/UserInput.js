import React from "react";

import "./UserInput.css";

const userInput = props => {
  return (
    <div className="userInput">
      <input type="text" onChange={props.changeUsername} value={props.name} />
    </div>
  );
};

export default userInput;
