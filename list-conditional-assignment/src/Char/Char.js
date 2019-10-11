import React from "react";
import classes from "./Char.module.css";

const char = props => {
  return (
    <div className={classes.compFrame} onClick={props.clicked}>
      {props.letter}
    </div>
  );
};

export default char;
