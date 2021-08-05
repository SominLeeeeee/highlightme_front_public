import React from "react";
import "./Keyword.scss";

function Keyword(props) {
  const { text, color } = { ...props };

  return (
    <button
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
