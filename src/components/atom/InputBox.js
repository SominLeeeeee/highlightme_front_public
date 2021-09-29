import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputBox.scss";

function InputBox(props) {
  const {
    placeholder,
    padding,
    radius,
    marginBottom,
    maxRows,
    minRows,
    onChange,
  } = {
    ...props,
  };

  return (
    <TextareaAutosize
      onChange={onChange}
      placeholder={placeholder}
      className="inputBox"
      maxRows={maxRows}
      minRows={minRows}
      style={{
        padding: padding,
        borderRadius: radius,
        width: `calc(100% - 2*${padding})`,
        marginBottom: marginBottom,
      }}
    />
  );
}

export default InputBox;
