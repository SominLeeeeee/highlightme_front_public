import React from "react";
import ClElementTitle from "./ClElementTitle";
import { useSelector, useDispatch } from "react-redux";
import "./clList.scss";
import { editCoverLetter } from "../store";

function ClList() {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter);

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
