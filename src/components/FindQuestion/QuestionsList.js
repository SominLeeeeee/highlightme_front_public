import React, { useEffect, useState } from "react";

import config from "../../configs";
import "./questionsList.scss";
import Question from "./Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";

function QuestionsList({
  keyword,
  questions,
  onLikeClick,
  onDislikeClick,
  onAnswerEdit,
  onAnswerPost,
}) {
  let questionJSX = [];
  questions.forEach((question, index) => {
    questionJSX.push(
      <Question
        key={question.question_id}
        question={question}
        onLikeClick={onLikeClick}
        onDislikeClick={onDislikeClick}
        onAnswerEdit={(answer) => onAnswerEdit(index, answer)}
        onAnswerPost={onAnswerPost}
      />
    );
  });

  return (
    <div className="questionsListParent">
      <HighlightText text="예상질문 리스트" marginBottom="3.6rem" />
      <ShadowBoxMedium>
        {keyword ? (
          <p id="keywordName">{keyword.keyword}</p>
        ) : (
          <div className="keywordNull">
            <p className="keywordClick"> 키워드를 클릭해보세요! 🙂</p>
          </div>
        )}
        {keyword && questions ? questionJSX : <div />}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
