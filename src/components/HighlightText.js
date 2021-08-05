import React from "react";
import "./HighlightText.scss";

function HighlightText(props) {
  const { text, penColor, color, marginBottom } = { ...props };

  return (
    <div className="highlightText" style={{ marginBottom: marginBottom }}>
      <p
        style={{
          color: color,
        }}
      >
        {text}
      </p>
      <div
        style={{
          backgroundColor: penColor,
        }}
      />
    </div>
  );
}

export default HighlightText;
