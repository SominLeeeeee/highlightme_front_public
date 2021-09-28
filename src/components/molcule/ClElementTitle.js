import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import "./clElementTitle.scss";
import "../../index.css";

function ClElementTitle(props) {
  const { number, problem } = { ...props };
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  function clElementTitleOnClick() {
    setCoverLetterElements((prev) => ({
      ...prev,
      selectedElement: number - 1,
    }));
  }

  return (
    <div
      className={
        number - 1 === coverLetterElements.selectedElement
          ? "clElementTitleActive noselect"
          : "clElementTitleDefault noselect"
      }
      onClick={clElementTitleOnClick}
    >
      <div className="clElementNumber">{number}</div>
      <p>{problem}</p>
    </div>
  );
}

export default ClElementTitle;
