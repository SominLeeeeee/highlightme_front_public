import React from "react";
import "./ItemCircle.scss";

function ItemCircle(props) {
  const { text, color, marginLeft } = { ...props };

  return (
    <span className="itemCircle">
      <div style={{ backgroundColor: color }} />
      <p
        style={{
          marginLeft: marginLeft,
        }}
      >
        {text}
      </p>
    </span>
  );
}

export default ItemCircle;
