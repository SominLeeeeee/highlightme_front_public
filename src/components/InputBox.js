import React from "react";
import "./InputBox.scss";

function InputBox(props) {
  const {
    text,
    backgroundColor,
    color,
    disabled,
    type,
    width,
    padding,
    radius,
    marginBottom,
  } = {
    ...props,
  };

  return (
    <input
      type={type}
      className="inputBox"
      placeholder={`${text} 입력해주세요.`}
      style={{
        padding: padding,
        borderRadius: radius,
        width: `calc(100% - 2*${padding})`,
        backgroundColor: backgroundColor,
        color: color,
        marginBottom: marginBottom,
      }}
    />
  );
}

export default InputBox;
