import React from "react";
import "./Question.scss";
import InputBox from "./InputBox";

function Question(props) {
  const { questionText, answerText } = { ...props };

  return (
    <div>
      <p id="questionText">Q. {questionText}</p>
      <InputBox
        text="답변을"
        padding="11px"
        radius="8px"
        marginBottom="5.2px"
      ></InputBox>
      <div id="underQuestion">
        <span id="evaluateQuestionBox">
          이 질문이 마음에 드셨나요?
          <img id="icGood" src="./images/ic-mydocs-good.svg"></img>
          <img id="icBad" src="./images/ic-mydocs-bad.svg"></img>
        </span>
        <span id="editAnswerBox">
          <img id="icEdit" src="./images/ic-mydocs-g-write.svg"></img>
          수정
        </span>
      </div>
    </div>
  );
}

export default Question;
