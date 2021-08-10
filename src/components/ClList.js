import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ClElementTitle from "./ClElementTitle";
import "./clList.scss";

function ClList() {
  return (
    <div>
      <div className="clListHeader">
        <p className="clListTitle">자기소개서 등록</p>
        <div className="clElementPlus">
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
