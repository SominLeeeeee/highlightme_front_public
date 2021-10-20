import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputBox.scss";

function InputBox({
  placeholder,
  padding,
  radius,
  marginBottom,
  maxRows,
  minRows,
  onChange,
  borderColor,
  value,
  id,
  disabled,
}) {
  return (
    <TextareaAutosize
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className={disabled ? "inputBoxDisable" : "inputBox"}
      disabled={disabled}
      maxRows={maxRows}
      minRows={minRows}
      value={value}
      style={{
        padding: padding,
        borderRadius: radius,
        width: `calc(100% - 2*${padding})`,
        marginBottom: marginBottom,
        borderColor: borderColor,
      }}
    />
  );
}

export default InputBox;
