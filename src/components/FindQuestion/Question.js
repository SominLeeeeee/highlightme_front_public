import React, { useEffect, useState } from "react";
import config from "../../configs";
import "./Question.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";
import InputBoxDisable from "../atom/InputBoxDisable";
import { useRecoilState } from "recoil";
import { atomKeyword, atomQuestion } from "../../recoil/userStore";
// import { ReactComponent as GoodIcon } from "../../public/images/ic-mydocs-good.svg";

function Question({
  question,
  onLikeClick,
  onDislikeClick,
  onAnswerPost,
  onAnswerEdit,
}) {
  const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
  const [isThumbsDownHovered, setIsThumbsDownHovered] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  function onEditClick() {
    /* 수정완료 버튼을 눌렀다면 서버에 전송 및 키워드 색상 변경 */
    setIsEditClicked(!isEditClicked);

    if (isEditClicked) {
      onAnswerPost(
        question.user_question_id,
        question.user_keyword_id,
        question.answer
      );
    }
  }

  return (
    <div>
      <p id="questionText">Q. {question.content}</p>
      {isEditClicked ? (
        <InputBox
          placeholder="답변을 입력해주세요."
          radius="1.6rem"
          maxRows="4"
          minRows="2"
          onChange={(event) => onAnswerEdit(event.target.value)}
          value={question.answer}
        />
      ) : (
        <InputBoxDisable
          placeholder="답변을 입력해주세요"
          radius="1.6rem"
          maxRows="4"
          minRows="2"
          onChange={(event) => onAnswerEdit(event.target.value)}
          value={question.answer}
        />
      )}
      <div id="underQuestion">
        <span className="evaluateQuestionBox noselect">
          이 질문이 마음에 드셨나요?
          <img
            id="icGood"
            src={
              question.liked
                ? "/images/ic-mydocs-good-clicked.svg"
                : isThumbsUpHovered
                ? "/images/ic-mydocs-good-clicked.svg"
                : "/images/ic-mydocs-good.svg"
            }
            onClick={onLikeClick}
            onMouseOver={() => setIsThumbsUpHovered(true)}
            onMouseOut={() => setIsThumbsUpHovered(false)}
          />
          <img
            id="icBad"
            src={
              question.disliked
                ? "/images/ic-mydocs-bad-clicked.svg"
                : isThumbsDownHovered
                ? "/images/ic-mydocs-bad-clicked.svg"
                : "/images/ic-mydocs-bad.svg"
            }
            onClick={onDislikeClick}
            onMouseOver={() => setIsThumbsDownHovered(true)}
            onMouseOut={() => setIsThumbsDownHovered(false)}
          />
        </span>
        <span id="editAnswerBox" onClick={onEditClick}>
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
