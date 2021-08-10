import React from "react";
import "./clElementTitle.scss";

function ClElementTitle(props) {
  const { number, problem } = { ...props };
  return (
    <div className="clElementTitle">
      <div className="clElementNumber">{number}</div>
      <p>{problem}</p>
    </div>
  );
}

export default ClElementTitle;
