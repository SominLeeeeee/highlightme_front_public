import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ClElementTitle from "./ClElementTitle";
import { useSelector, useDispatch } from "react-redux";
import "./clList.scss";
import { EDIT_COVERLETTER } from "../store";

function ClList() {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.coverLetter);

  function clPlusOnClick() {
    console.log(coverLetter.length);
    dispatch({
      type: EDIT_COVERLETTER,
      number: coverLetter.length,
      problem: "",
      answer: "",
    });
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
        <ClElementTitle
          number="1"
          problem="자기소개서 문항 입력"
        ></ClElementTitle>
      </div>
    </div>
  );
}

export default ClList;
