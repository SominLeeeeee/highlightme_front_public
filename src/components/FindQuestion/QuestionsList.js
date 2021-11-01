import React from "react";

import "./questionsList.scss";
import Question from "./Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import TailQuestion from "./TailQuestion";

function QuestionsList({
  keyword,
  questions,
  onLikeClick,
  onDislikeClick,
  onChangeAnswer,
  onEditClick,
  onScrapClick,
}) {
  function makeQuestionListJSX() {
    let questionListJSX = [];
    questions.forEach((question) => {
      if (question.type !== "tail")
        questionListJSX.push(makeQuestionJSX(question));
    });

    return questionListJSX;
  }

  function makeQuestionJSX(paramQuestion) {
    return (
      <div>
        <Question
          key={paramQuestion.id}
          question={paramQuestion}
          onChangeAnswer={onChangeAnswer}
          onEditClick={onEditClick}
          onLikeClick={onLikeClick}
          onDislikeClick={onDislikeClick}
          onScrapClick={onScrapClick}
        />
        {paramQuestion.tail ? (
          <TailQuestion
            key={paramQuestion.tail}
            question={questions.get(paramQuestion.tail)}
            onChangeAnswer={onChangeAnswer}
            onEditClick={onEditClick}
            onLikeClick={onLikeClick}
            onDislikeClick={onDislikeClick}
            onScrapClick={onScrapClick}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }

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
        {keyword && questions ? makeQuestionListJSX() : <div />}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
