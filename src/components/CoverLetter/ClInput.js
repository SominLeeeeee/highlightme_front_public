import React, { useState } from "react";
import "./clInput.scss";
import ClTip from "../molcule/ClTip";
import InputTitle from "../atom/InputTitle";
import InputBox from "../atom/InputBox";
import ErrNotice from "../atom/ErrNotice";

function ClInput(props) {
  const {
    onChangeProblem,
    onChangeAnswer,
    onClickSaveButton,
    onClickDeleteButton,
    countErr,
    emptyErr,
    problem,
    answer,
  } = { ...props };

  const [deleteHover, setDeleteHover] = useState(false);

  function onDeleteButtonMouseOver() {
    setDeleteHover(!deleteHover);
  }

  return (
    <div className="clInputWrapper">
      <ClTip />
      <div id="problemInputDiv">
        <InputTitle>자기소개서 문항 입력</InputTitle>
        <InputBox
          id="problemInput"
          onChange={onChangeProblem}
          minRows="1"
          maxRows="2"
          placeholder="ex) 본인의 장단점에 대해 얘기해주세요."
          borderColor={emptyErr ? "red" : ""}
          value={problem}
        />
        <ErrNotice hint="내용을 입력해주세요." flag={emptyErr} />
      </div>

      <div id="answerInputDiv">
        <InputTitle>자기소개서 답변 입력</InputTitle>
        <InputBox
          id="answerInput"
          onChange={onChangeAnswer}
          minRows="4"
          maxRows="7"
          placeholder="ex) 저의 장점은 근면성실하다는 것입니다."
          borderColor={countErr ? "red" : ""}
          value={answer}
        />
        <div className="clInputNotice">
          <ErrNotice hint="답변을 200자 이상 입력해주세요." flag={countErr} />
          <div />
          <p className="typingCount">
            ({answer == null ? 0 : answer.length}자)
          </p>
        </div>
      </div>

      <div className="clInputButtons">
        <div
          className="clInputDeleteButton noselect"
          onMouseOver={onDeleteButtonMouseOver}
          onMouseOut={onDeleteButtonMouseOver}
          onClick={onClickDeleteButton}
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
        <div className="clInputSaveButton">
          <button
            onClick={onClickSaveButton}
            style={
              answer !== null && problem !== null
                ? { backgroundColor: "#febb2d" }
                : { backgroundColor: "#eaeaea" }
            }
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClInput;
