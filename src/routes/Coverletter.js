import React from "react";
import "./coverletter.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../components/Header";

function Coverletter() {
  return (
    <div>
      <Header />
      <div className="coverletterWrapper">
        <div className="coverletter">
          <ClList />
          <ClInput />
        </div>
      </div>
    </div>
  );
}

export default Coverletter;
