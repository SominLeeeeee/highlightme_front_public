import React from "react";
import "./ShadowBoxLarge.scss";

function ShadowBoxLarge(props) {
  const { paddingTop, paddingBottom, children } = { ...props };

  return (
    <div
      className="shadowBoxLarge"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBoxLarge;
