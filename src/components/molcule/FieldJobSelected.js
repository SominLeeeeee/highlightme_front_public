import React from "react";
import "./fieldJobSelected.scss";

function FieldJobSelected(props) {
  const { fieldJob, onRemove } = { ...props };

  return (
    <div id="fieldJobWrapper">
      {fieldJob.map((element, index) => (
        <div className="fieldJobSelected">
          {element.field} {">"} {element.job}
          <img
            src="/images/ic-sign-delete.svg"
            alt="remove selected"
            onClick={() => onRemove(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default FieldJobSelected;
