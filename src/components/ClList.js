import React from "react";
import ClElementTitle from "./ClElementTitle";
import "./clList.scss";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../recoil/userStore";
import produce from "immer";

function ClList() {
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  function clPlusOnClick() {
    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element.push({
          problem: "자기소개서 문항을 입력해주세요",
          answer: "",
        });
        return draft;
      })
    );
  }

  console.log("coverLetterElements", coverLetterElements);

  return (
    <div className="clListWrapper">
      <div className="clListHeader">
        <p className="clListTitle">자기소개서 등록</p>
        <div className="clElementPlus" onClick={clPlusOnClick}>
          <img src="/images/ic-mydocs-plus.svg" />
          <p>추가하기</p>
        </div>
      </div>
      <div>
        {coverLetterElements.element.map((e, index) => (
          <ClElementTitle number={index + 1} problem={e.problem} />
        ))}
      </div>
    </div>
  );
}

export default ClList;
