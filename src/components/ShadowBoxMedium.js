import { isCatchClause } from "@babel/types";
import React from "react";
import "./ShadowBoxMedium.scss";

function ShadowBoxMedium(props) {
  const { paddingTop, children } = { ...props };

  return (
    <div
      className="shadowBoxMedium"
      style={{
        paddingTop: paddingTop,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBoxMedium;
