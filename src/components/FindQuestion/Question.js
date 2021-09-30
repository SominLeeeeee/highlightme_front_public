import React, { useState } from "react";
import "./Question.scss";
import InputBox from "../atom/InputBox";
// import { ReactComponent as GoodIcon } from "../../public/images/ic-mydocs-good.svg";

function Question(props) {
  const { questionText, answerText } = { ...props };
  const [isThumbClicked, setIsThumbClicked] = useState("x");
  const [isThumbHovered, setIsThumbHovered] = useState("x");
  const [isEditClicked, setIsEditClicked] = useState(false);

  function goodOnClick() {
    if (isThumbClicked == "g") setIsThumbClicked("x");
    else setIsThumbClicked("g");
  }

  function badOnClick() {
    if (isThumbClicked == "b") setIsThumbClicked("x");
    else setIsThumbClicked("b");
  }

  function editOnClick() {
    setIsEditClicked(!isEditClicked);
  }

  function goodOnMouseOver() {
    setIsThumbHovered("g");
  }

  function badOnMouseOver() {
    setIsThumbHovered("b");
  }

  function thumbOnMouseOut() {
    setIsThumbHovered("x");
  }

  return (
    <div>
      <p id="questionText">Q. {questionText}</p>
      <InputBox
        text="답변을 입력해주세요."
        padding="1.6rem"
        radius="1.6rem"
        marginBottom="1rem"
        maxRows="4"
        minRows="2"
      ></InputBox>
      <div id="underQuestion">
        <span id="evaluateQuestionBox">
          이 질문이 마음에 드셨나요?
          <img
            id="icGood"
            src={
              isThumbClicked == "g"
                ? "/images/ic-mydocs-good-clicked.svg"
                : isThumbHovered == "g"
                ? "/images/ic-mydocs-good-clicked.svg"
                : "/images/ic-mydocs-good.svg"
            }
            onClick={goodOnClick}
            onMouseOver={goodOnMouseOver}
            onMouseOut={thumbOnMouseOut}
          />
          <img
            id="icBad"
            src={
              isThumbClicked == "b"
                ? "/images/ic-mydocs-bad-clicked.svg"
                : isThumbHovered == "b"
                ? "/images/ic-mydocs-bad-clicked.svg"
                : "/images/ic-mydocs-bad.svg"
            }
            onClick={badOnClick}
            onMouseOver={badOnMouseOver}
            onMouseOut={thumbOnMouseOut}
          />
        </span>
        <span id="editAnswerBox" onClick={editOnClick}>
          <img
            id="icEdit"
            src={
              isEditClicked
                ? "/images/ic-mydocs-g-write-clicked.svg"
                : "/images/ic-mydocs-g-write.svg"
            }
          />
          <p style={isEditClicked ? { color: "#fe894b" } : {}}>
            {isEditClicked ? "수정완료" : "수정"}
          </p>
        </span>
      </div>
    </div>
  );
}

export default Question;
