import React from "react";
import "./questionContent.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";

function QuestionContent({ question, onChangeAnswer }) {
  return (
    <div className="question">
      <p id="questionText">Q. {question.content}</p>
      <InputBox
        placeholder="답변을 입력해주세요."
        radius="1.6rem"
        maxRows="4"
        minRows="2"
        onChange={(event) => onChangeAnswer(question.id, event.target.value)}
        value={question.answer}
        disabled={!question.actions.editing}
      />
    </div>
  );
}

export default QuestionContent;
