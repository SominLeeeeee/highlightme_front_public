import React from "react";
import "./InputBoxDisable.scss";
import TextareaAutosize from "react-textarea-autosize";

function InputBoxDisable(props) {
  const {
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
    children,
  } = {
    ...props,
  };

  return (
    <TextareaAutosize
      disabled
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className="inputBoxDisable"
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
    >
      {children}
    </TextareaAutosize>
  );
}

export default InputBoxDisable;
