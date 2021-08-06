import React from "react";
import "./ItemCircle.scss";

function ItemCircle(props) {
  const { text, color } = { ...props };

  return (
    <span className="itemCircle">
      <div style={{ backgroundColor: color }} />
      <p>{text}</p>
    </span>
  );
}

export default ItemCircle;
