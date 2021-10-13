import React from "react";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import "./clElementTitle.scss";
import "../../index.css";
import NumberCircle from "../atom/NumberCircle";

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
      <NumberCircle
        type={
          number - 1 === coverLetterElements.selectedElement
            ? "active"
            : "default"
        }
      >
        {number}
      </NumberCircle>
      <p>{problem}</p>
    </div>
  );
}

export default ClElementTitle;
