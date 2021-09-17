import React from "react";
import "../style/coverletter.scss";
import ClInput from "../components/ClInput";
import ClList from "../components/ClList";

function Coverletter() {
  return (
    <div className="coverletterWrapper">
      <div className="coverletter">
        <ClList />
        <ClInput />
      </div>
    </div>
  );
}

export default Coverletter;
