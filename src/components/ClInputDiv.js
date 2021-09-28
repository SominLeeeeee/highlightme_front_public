import { useEffect, useState } from "react";
import "./clInputDiv.scss";
import InputBox from "./InputBox";

function ClInputDiv(props) {
  const { hint, title, onChange, height, text } = { ...props };

  return (
    <div className="clInputDivWrapper">
      <span className="clInputTitle">{title}</span>
      <InputBox
        onChange={onChange}
        minRows="1"
        maxRows="7"
        placeholder={hint}
        padding="1.6rem"
        radius="0.8rem"
      />
    </div>
  );
}

export default ClInputDiv;
