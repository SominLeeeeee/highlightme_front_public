import React from "react";
import "./selectedFieldJob.scss";

function SelectedFieldJob(props) {
  const { field, job, children } = { ...props };

  return (
    <div className="selectedFieldJob">
      {field} {" > "}
      {job}
      {children}
    </div>
  );
}

export default SelectedFieldJob;
