import React from "react";
import "./clInput.scss";
import ClInputDiv from "./ClInputDiv";

function ClInput() {
  var count = 100;

  return (
    <div>
      {/* Tip
        <div>
          <div>
            <img src="/images/ic-mydocs-tip.svg" />
            <p> Tip</p>
          </div>
          <p>
            질문하기 서비스를 이용하려면 자기소개서 항목이 필요합니다. 질문하기
            서비스를 이용하려면 자기소개서 항목이 필요합니다. 질문하기 서비스를
            이용하려면 입니다.
          </p>
        </div> */}

      {/* 자기소개서 문항 입력 */}
      <ClInputDiv
        title="자기소개서 문항 입력"
        hint="ex) 협업을 진행하며 어려웠던 경험이 있으신가요?"
      />
      <ClInputDiv
        title="자기소개서 답변 입력"
        hint="ex) 커뮤니케이션 부분에서 미숙한 점이 있었지만 이렇게 극복했습니다."
      />
      <div className="clInputNotice">
        <p className="errNotice">답변을 200자 이상 입력해주세요.</p>
        <p className="typingCount">({count} / 5000자)</p>
      </div>
    </div>
  );
}

export default ClInput;
