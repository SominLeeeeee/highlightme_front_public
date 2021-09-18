import React from "react";
import ClElementTitle from "./ClElementTitle";
import { useSelector, useDispatch } from "react-redux";
import "./clList.scss";
import { editCoverLetter } from "../store";

function ClList() {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter);

  function clPlusOnClick() {
    console.log(coverLetter.length);

    dispatch(
      editCoverLetter({
        number: coverLetter.length,
        problem: "직무를 선택해주세요",
        answer: "",
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
        {coverLetter.map((element, index) => (
          <ClElementTitle number={index + 1} problem={element.problem} />
        ))}
      </div>
    </div>
  );
}

export default ClList;
