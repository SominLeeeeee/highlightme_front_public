import React from "react";
import "./ShadowBoxMedium.scss";

function ShadowBoxMedium(props) {
  const { paddingTop, children, paddingBottom, padding, marginBottom } = {
    ...props,
  };

  return (
    <div
      className="shadowBoxMedium"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        padding: padding,
        marginBottom: marginBottom,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBoxMedium;
