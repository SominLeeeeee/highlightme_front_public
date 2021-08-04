import { isCatchClause } from "@babel/types";
import React from "react";
import "./ShadowBox.scss";

function ShadowBox(props) {
  const { width, aOfRgba, flexDirection, padding, children, radius } = {
    ...props,
  };

  var tempWidth;
  if (width != null) tempWidth = `calc(${width} - 2*${padding})`;
  else tempWidth = `calc(100% - 2*${padding})`;

  const w = tempWidth;

  return (
    <div
      className="shadowBox"
      style={{
        width: w,
        flexDirection: flexDirection,
        boxShadow: `0 5px 15px 0 rgba(0,0,0,${aOfRgba})`,
        padding: padding,
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBox;
