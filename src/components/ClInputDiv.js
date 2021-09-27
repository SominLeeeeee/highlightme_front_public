import { useEffect, useState } from "react";
import "./clInputDiv.scss";

function ClInputDiv(props) {
  const { hint, title, onChange, height, text } = { ...props };

  return (
    <div className="clInputDivWrapper">
      <span className="clInputTitle">{title}</span>
      <textarea
        className="clInputAnswer"
        placeholder={hint}
        onChange={onChange}
        style={{ height: height }}
      />
    </div>
  );
}

export default ClInputDiv;
