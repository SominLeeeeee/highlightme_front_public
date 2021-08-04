import { isCatchClause } from "@babel/types";
import React from "react";
import "./ShadowBox.scss";

function ShadowBox(props) {
  const { width, aOfRgba, flexDirection, padding, children } = { ...props };

  return (
    <div
      width={width - 2 * padding}
      className="shadowBox"
      style={{
        flexDirection: { flexDirection },
        boxShadow: `0 5px 15px 0 rgba(0,0,0,${aOfRgba})`,
        padding: { padding },
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBox;
