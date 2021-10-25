import React, { useState } from "react";
import "./Question.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";
import LikeButton from "../atom/LikeButton";
import DislikeButton from "../atom/DislikeButton";
import ScrapButton from "../atom/ScrapButton";

function Question({
  question,
  onLikeClick,
  onDislikeClick,
  onAnswerPost,
  onAnswerEdit,
  onScrapClick,
}) {
  const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
  const [isThumbsDownHovered, setIsThumbsDownHovered] = useState(false);
  const [isScrapHovered, setIsScrapHovered] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [tailQuestion, setTailQuestion] = useState(false);

  async function onEditClick() {
    /* 수정완료 버튼을 눌렀다면 서버에 전송 및 키워드 색상 변경 */
    setIsEditClicked(!isEditClicked);
    let tailResult;

    if (isEditClicked) {
      tailResult = onAnswerPost(
        question.user_question_id,
        question.user_keyword_id,
        question.answer
      );
    }

    setTailQuestion(await tailResult);
    console.log(await tailResult);
  }

  return (
    <div className="question">
      <p id="questionText">Q. {question.content}</p>
      <InputBox
        placeholder="답변을 입력해주세요."
        radius="1.6rem"
        maxRows="4"
        minRows="2"
        onChange={(event) => onAnswerEdit(event.target.value)}
        value={question.answer}
        disabled={!isEditClicked}
      />

      <div id="underQuestion">
        <span className="evaluateQuestionBox noselect">
          <LikeButton
            onClick={onLikeClick}
            onMouseOver={() => setIsThumbsUpHovered(true)}
            onMouseOut={() => setIsThumbsUpHovered(false)}
            status={
              question.liked
                ? "active"
                : isThumbsUpHovered
                ? "active"
                : "default"
            }
          />
          <DislikeButton
            onClick={onDislikeClick}
            onMouseOver={() => setIsThumbsDownHovered(true)}
            onMouseOut={() => setIsThumbsDownHovered(false)}
            status={
              question.disliked
                ? "active"
                : isThumbsDownHovered
                ? "active"
                : "default"
            }
          />
          <ScrapButton
            onClick={onScrapClick}
            onMouseOver={() => setIsScrapHovered(true)}
            onMouseOut={() => setIsScrapHovered(false)}
            status={
              question.scraped
                ? "active"
                : isScrapHovered
                ? "active"
                : "default"
            }
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

      {tailQuestion ? (
        <div id="tailQuestion">
          <img id="tailIcon" src="/images/ic-mydocs-tailquestion.svg" />
          <Question
            question={tailQuestion}
            onLikeClick={() => onLikeClick}
            onDislikeClick={() => onDislikeClick}
            onAnswerEdit={(answer) => onAnswerEdit}
            onAnswerPost={onAnswerPost}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
