import React, { useState } from "react";
import "./Question.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";

function Question({
  question,
  onLikeClick,
  onDislikeClick,
  onAnswerPost,
  onAnswerEdit,
}) {
  const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
  const [isThumbsDownHovered, setIsThumbsDownHovered] = useState(false);
  const [isScrapHovered, setIsScrapHovered] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [tailQuestion, setTailQuestion] = useState(false);

  async function onEditClick() {
    /* 수정완료 버튼을 눌렀다면 서버에 전송, 키워드 색상 변경, 꼬리질문 설정 */
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
  }

  const icGoodActive = (
    <span className="iconSpan">
      <img id="icGood" src={"/images/ic-mydocs-good-clicked.svg"} />
      <span className={"icParagraphFocused"}>좋아요</span>
    </span>
  );

  const icGood = (
    <span className="iconSpan">
      <img id="icGood" src={"/images/ic-mydocs-good.svg"} />
      <span className={"icParagraph"}>좋아요</span>
    </span>
  );

  const icBadActive = (
    <span className="iconSpan">
      <img id="icBad" src={"/images/ic-mydocs-bad-clicked.svg"} />
      <span className={"icParagraphFocused"}>싫어요</span>
    </span>
  );

  const icBad = (
    <span className="iconSpan">
      <img id="icBad" src={"/images/ic-mydocs-bad.svg"} />
      <span className={"icParagraph"}>싫어요</span>
    </span>
  );

  const icScrapActive = (
    <span className="iconSpan">
      <img id="icScrap" src={"/images/ic-mydocs-scrap-clicked.svg"} />
      <span className={"icParagraphFocused"}>모아두기</span>
    </span>
  );

  const icScrap = (
    <span className="iconSpan">
      <img id="icScrap" src={"/images/ic-mydocs-scrap.svg"} />
      <span className={"icParagraph"}>모아두기</span>
    </span>
  );

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
          <span
            onClick={onLikeClick}
            onMouseOver={() => setIsThumbsUpHovered(true)}
            onMouseOut={() => setIsThumbsUpHovered(false)}
          >
            {question.liked
              ? icGoodActive
              : isThumbsUpHovered
              ? icGoodActive
              : icGood}
          </span>
          <span
            onClick={onDislikeClick}
            onMouseOver={() => setIsThumbsDownHovered(true)}
            onMouseOut={() => setIsThumbsDownHovered(false)}
          >
            {question.disliked
              ? icBadActive
              : isThumbsDownHovered
              ? icBadActive
              : icBad}
          </span>
          <span
            onMouseOver={() => setIsScrapHovered(true)}
            onMouseOut={() => setIsScrapHovered(false)}
          >
            {question.scraped
              ? icScrapActive
              : isScrapHovered
              ? icScrapActive
              : icScrap}
          </span>
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
