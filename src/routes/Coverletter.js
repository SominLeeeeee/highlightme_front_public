import React from "react";
import "./coverletter.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";

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
