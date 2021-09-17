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
        질문하기 서비스를 이용하려면 자기소개서 항목이 필요합니다. 어쩌구저쩌구
      </p>
    </div>
  );
}

export default ClTip;
