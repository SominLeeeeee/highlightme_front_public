import React from "react";
import "./HighlightText.scss";

function HighlightText(props) {
  const { text, penColor, color } = { ...props };

  return (
    // <div className="highlightText">
    //   <p
    //     style={{
    //       color: color,
    //     }}
    //   >
    //     {text}
    //   </p>
    //   <div
    //     style={{
    //       backgroundColor: penColor,
    //     }}
    //   />
    //   </div>

    <div className="highlightText">
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
