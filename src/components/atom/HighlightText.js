import React from "react";
import "./HighlightText.scss";

function HighlightText(props) {
  const { penColor, color, marginBottom, fontSize, fontFamily, text } = {
    ...props,
  };

  return (
    <div className="highlightText" style={{ marginBottom: marginBottom }}>
      <p
        style={{
          color: color,
          fontSize: fontSize,
          fontFamily: fontFamily,
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
