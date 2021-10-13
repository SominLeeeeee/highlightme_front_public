import React from "react";
import "./HighlightButton.scss";

function HighlightButton(props) {
  const { text, backgroundColor, color, onClick } = { ...props };

  return (
    <button
      type="button"
      className="highlightBtn"
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {text}
    </button>
  );
}

export default HighlightButton;
