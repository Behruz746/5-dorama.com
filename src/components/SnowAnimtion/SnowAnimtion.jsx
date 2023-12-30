import React from "react";
import "./style.scss";

function SnowAnimtion() {
  let arr = [];

  for (let i = 0; i <= 84; i++) {
    arr.push(i);
  }

  return (
    <div className="snowflakes">
      {arr.map((item, index) => (
        <i key={index}></i>
      ))}
    </div>
  );
}

export default SnowAnimtion;
