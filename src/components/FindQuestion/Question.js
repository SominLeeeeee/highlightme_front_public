import React, { useState } from "react";
import "./Question.scss";
import "../../index.css";
import InputBox from "../atom/InputBox";
import RespondFindQuestion from "./RespondFindQuestion";

function Question({
  question,
  onLikeClick,
  onDislikeClick,
  onAnswerPost,
  onAnswerEdit,
  onScrapClick,
}) {
  const [tailQuestion, setTailQuestion] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  async function onEditClick(paramEditClicked) {
    /* 수정완료 버튼을 눌렀다면 서버에 전송, 키워드 색상 변경, 꼬리질문 설정 */
    setIsEditClicked(paramEditClicked);

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

      <RespondFindQuestion
        question={question}
        onLikeClick={onLikeClick}
        onDislikeClick={onDislikeClick}
        onScrapClick={onScrapClick}
        onEditClick={onEditClick}
      />

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
          <RespondFindQuestion
            question={tailQuestion}
            onLikeClick={onLikeClick}
            onDislikeClick={onDislikeClick}
            onScrapClick={onScrapClick}
            onEditClick={onEditClick}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
