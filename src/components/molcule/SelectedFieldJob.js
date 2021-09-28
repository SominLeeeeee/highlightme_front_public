import React from "react";
import "./selectedFieldJob.scss";

function SelectedFieldJob(props) {
  const { fieldJob, onRemove } = { ...props };

  return (
    <div id="fieldJobWrapper">
      {fieldJob.map((element, index) => (
        <div className="selectedFieldJob">
          {element.field} {">"} {element.job}
          <img
            src="/images/ic-sign-delete.svg"
            onClick={() => onRemove(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default SelectedFieldJob;
