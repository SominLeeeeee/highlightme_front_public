import React from "react";
import "./InputBox.scss";

function InputBox(props) {
  const { text, backgroundColor, color, disabled, type } = { ...props };

  return (
    <input
      type={type}
      className="inputBox"
      placeholder={`${text} 입력해주세요.`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    />
  );
}

export default InputBox;
