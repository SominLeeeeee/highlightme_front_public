import React from "react";
import "./Keyword.scss";

function Keyword(props) {
  const { text, color, onClick } = { ...props };

  return (
    <button
      onClick={onClick}
      className="keyword"
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}

export default Keyword;
