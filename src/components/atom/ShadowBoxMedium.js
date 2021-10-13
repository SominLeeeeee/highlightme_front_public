import React from "react";
import "./ShadowBoxMedium.scss";

function ShadowBoxMedium(props) {
  const { paddingTop, children, paddingBottom } = { ...props };

  return (
    <div
      className="shadowBoxMedium"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBoxMedium;
