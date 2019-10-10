import React from "react";

const userOutput = props => {
  const style = {
    padding: "15px",
    textAlign: "center"
  };
  return (
    <div style={style}>
      <p>Something1 {props.name}</p>
      <p>Something2</p>
      <hr />
    </div>
  );
};

export default userOutput;
