import React, { useState } from "react";
import "./clInput.scss";
import ClInputDiv from "./ClInputDiv";

function ClInput() {
  const [count, setCount] = useState(0);

  const onInputChange = (event) => {
    setCount(event.target.value.length);
  };

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
        hint="ex) 본인의 특성 및 성격의 장단점을 자유롭게 기술해주세요."
      />
      <ClInputDiv
        title="자기소개서 답변 입력"
        hint="ex) 저의 장점은 어떤 일이든 책임감을 가지고 수행해내는 것입니다."
        onChange={onInputChange}
      />
      <div className="clInputNotice">
        <div>
          <p className="errNotice">답변을 200자 이상 입력해주세요.</p>
        </div>
        <p className="typingCount">({count} / 5000자)</p>
      </div>

      <div className="clInputButtons">
        <div className="clInputDeleteButton">
          <img src="/images/ic-mydocs-trash.svg" />
          <p>삭제</p>
        </div>
        <button className="clInputSaveButton">저장하기</button>
      </div>
    </div>
  );
}

export default ClInput;
