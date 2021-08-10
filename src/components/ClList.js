import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./clList.scss";

function ClList() {
  return (
    <div>
      <div className="clListHeader">
        <p className="clListTitle">자기소개서 등록</p>
        <div className="clQuestionPlus">
          <img src="/images/ic-mydocs-plus.svg" />
          <p>추가하기</p>
        </div>
      </div>
    </div>
  );
}

export default ClList;
