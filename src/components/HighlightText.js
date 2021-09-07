import React from "react";
import "./HighlightText.scss";

function HighlightText(props) {
  const { text, penColor, color, marginBottom, fontSize } = { ...props };

  return (
    <div className="highlightText" style={{ marginBottom: marginBottom }}>
      <p
        style={{
          color: color,
          fontSize: fontSize,
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
