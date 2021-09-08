import React from "react";
import "./ShadowBoxLarge.scss";

function ShadowBoxLarge(props) {
  const { paddingTop, children } = { ...props };

  return (
    <div
      className="shadowBoxLarge"
      style={{
        paddingTop: paddingTop,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBoxLarge;
