import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./clInput.scss";
import ClInputDiv from "./ClInputDiv";

function ClInput() {
  const [count, setCount] = useState(0);
  const [deleteHover, setDeleteHover] = useState(false);

  const onInputChange = (event) => {
    setCount(event.target.value.length);
  };

  const onSaveButtonClicked = () => {
    if (count < 200)
      document.getElementById("errNotice").style.display = "inline-block";
    else {
      document.getElementById("errNotice").style.display = "none";
    }
  };

  const onDeleteButtonMouseOver = () => {
    setDeleteHover(!deleteHover);
  };

  return (
    <div className="clInputWrapper">
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
        className="clInputDiv"
        title="자기소개서 문항 입력"
        hint="ex) 본인의 특성 및 성격의 장단점을 자유롭게 기술해주세요."
      />
      <ClInputDiv
        className="clInputDiv"
        title="자기소개서 답변 입력"
        hint="ex) 저의 장점은 어떤 일이든 책임감을 가지고 수행해내는 것입니다."
        onChange={onInputChange}
      />

      <div className="clInputNotice">
        <div>
          <p id="errNotice">답변을 200자 이상 입력해주세요.</p>
        </div>
        <p className="typingCount">({count} / 5000자)</p>
      </div>

      <div className="clInputButtons">
        <div
          className="clInputDeleteButton"
          onMouseOver={onDeleteButtonMouseOver}
          onMouseOut={onDeleteButtonMouseOver}
        >
          <img
            src={
              deleteHover
                ? "/images/ic-mydocs-trash-clicked.svg"
                : "/images/ic-mydocs-trash.svg"
            }
          />
          <p style={deleteHover ? { color: "#ff0000" } : { color: "#838383" }}>
            삭제
          </p>
        </div>
        <button
          className="clInputSaveButton"
          onClick={onSaveButtonClicked}
          style={
            count > 0
              ? { backgroundColor: "#febb2d" }
              : { backgroundColor: "#eaeaea" }
          }
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ClInput;
