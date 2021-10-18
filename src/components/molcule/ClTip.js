import React from "react";
import "./clTip.scss";

function ClTip() {
  return (
    <div className="clTip">
      <div id="tipTitleWrapper">
        <img src="/images/ic-mydocs-tip.svg" />
        <span id="tipTitle">
          <b>Tip</b>
        </span>
      </div>
      <p id="tipParagraph">
        질문찾기 서비스를 이용하려면 자기소개서 항목이 필요합니다.
        <br />
        Alpha 서비스 기간 동안 내용에 특수 문자(엔터, 괄호, 따옴표 등)를 입력할
        수 없습니다.
      </p>
    </div>
  );
}

export default ClTip;
