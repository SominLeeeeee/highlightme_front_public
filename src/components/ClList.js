import React from "react";
import ClElementTitle from "./ClElementTitle";
import "./clList.scss";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../recoil/userStore";

function ClList() {
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  function clPlusOnClick() {
    // coverLetterElements가 list이기 때문에 똑같이 list로 return
    setCoverLetterElements((prev) => [
      ...prev,
      { problem: "자기소개서 문항을 입력해주세요", answer: "" },
    ]);
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
        {coverLetterElements.map((element, index) => (
          <ClElementTitle number={index + 1} problem={element.problem} />
        ))}
      </div>
    </div>
  );
}

export default ClList;
