import React, { useState } from "react";
import "./Question.scss";
import InputBox from "./InputBox";
// import { ReactComponent as GoodIcon } from "../../public/images/ic-mydocs-good.svg";

function Question(props) {
  const { questionText, answerText } = { ...props };
  const [isThumbClicked, setIsThumbClicked] = useState("x");

  function goodOnClick() {
    if (isThumbClicked == "g") setIsThumbClicked("x");
    else setIsThumbClicked("g");
  }

  function badOnClick() {
    if (isThumbClicked == "b") setIsThumbClicked("x");
    else setIsThumbClicked("b");
  }

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
          <img
            id="icGood"
            src={
              isThumbClicked == "g"
                ? "/images/ic-mydocs-good-clicked.svg"
                : "/images/ic-mydocs-good.svg"
            }
            style={{ height: "9px", width: "9.4px" }}
            onClick={goodOnClick}
          />
          <img
            id="icBad"
            src={
              isThumbClicked == "b"
                ? "/images/ic-mydocs-bad-clicked.svg"
                : "/images/ic-mydocs-bad.svg"
            }
            style={{ height: "9px", width: "9.4px" }}
            onClick={badOnClick}
          />
        </span>
        <span id="editAnswerBox">
          <img id="icEdit" src="/images/ic-mydocs-g-write.svg" />
          수정
        </span>
      </div>
    </div>
  );
}

export default Question;
