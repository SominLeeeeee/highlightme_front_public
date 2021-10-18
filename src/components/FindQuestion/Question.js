import React, { useEffect, useState } from "react";
import config from "../../configs";
import "./Question.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";
import InputBoxDisable from "../atom/InputBoxDisable";
import { useRecoilState } from "recoil";
import { atomQuestion } from "../../recoil/userStore";
import produce from "immer";
// import { ReactComponent as GoodIcon } from "../../public/images/ic-mydocs-good.svg";

function Question(props) {
  const [question, setQuestion] = useRecoilState(atomQuestion);
  const [questionId, setQuestionId] = useState(props.id);

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
    /* 수정완료 버튼을 눌렀다면 서버에 전송 */
    console.log(question[questionId].answer);
    let res = fetch(`${config.URL}/api/questions/answer`, {
      // let res = fetch(`/api/questions/answer`, {
      method: "POST",
      credentials: "include",
      body: new URLSearchParams({
        user_question_id: question[questionId].user_question_id,
        user_keyword_id: question[questionId].user_keyword_id,
        answer: question[questionId].answer,
      }),
    });

    console.log(res);

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

  const onInputChangeAnswer = (event) => {
    setQuestion((prev) =>
      produce(prev, (draft) => {
        console.log(draft);
        draft[questionId].answer = event.target.value;
        return draft;
      })
    );
  };

  return (
    <div>
      <p id="questionText">Q. {question[questionId].content}</p>
      {isEditClicked ? (
        <InputBox
          placeholder="답변을 입력해주세요."
          radius="1.6rem"
          maxRows="4"
          minRows="2"
          onChange={onInputChangeAnswer}
          value={question[questionId].answer}
        />
      ) : (
        <InputBoxDisable
          placeholder="답변을 입력해주세요"
          radius="1.6rem"
          maxRows="4"
          minRows="2"
          onChange={onInputChangeAnswer}
          value={question[questionId].answer}
        />
      )}
      <div id="underQuestion">
        <span className="evaluateQuestionBox noselect">
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
          <p
            className="noselect"
            style={isEditClicked ? { color: "#fe894b" } : {}}
          >
            {isEditClicked ? "수정완료" : "수정"}
          </p>
        </span>
      </div>
    </div>
  );
}

export default Question;
