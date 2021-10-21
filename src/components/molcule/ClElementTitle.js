import React from "react";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import "./clElementTitle.scss";
import "../../index.css";
import NumberCircle from "../atom/NumberCircle";

function ClElementTitle(props) {
  const { number, problem, selected } = { ...props };
  const [cle, setCle] = useRecoilState(atomCoverLetterElements);

  function handleClickAnotherElement() {
    setCle((prev) => ({ ...prev, selectedElement: number - 1 }));
  }

  return (
    <div
      className={
        selected
          ? "clElementTitleActive noselect"
          : "clElementTitleDefault noselect"
      }
      onClick={handleClickAnotherElement}
    >
      <NumberCircle type={selected ? "active" : "default"}>
        {number}
      </NumberCircle>
      <p>{problem ? problem : "자기소개서 문항을 입력해주세요"}</p>
    </div>
  );
}

export default ClElementTitle;
