import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputBox.scss";

function InputBox(props) {
  const { text, padding, radius, marginBottom, maxRows, minRows } = {
    ...props,
  };

  return (
    <TextareaAutosize
      placeholder={text}
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
