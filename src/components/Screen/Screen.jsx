import React from "react";
import "./Screen.css";

const Screen = ({value}) => {
  return (
    <div className="screen">
      <h1>{value}</h1>
    </div>
  );
};

export default Screen;
