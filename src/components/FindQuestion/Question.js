import { useState } from "react";
import QuestionAction from "./QuestionAction";
import QuestionContent from "./QuestionContent";
import "./question.scss";

function Question(props) {
  const {
    question,
    onLikeClick,
    onDislikeClick,
    onEditClick,
    onChangeAnswer,
    onScrapClick,
  } = {
    ...props,
  };

  return (
    <div className="question">
      <QuestionContent question={question} onChangeAnswer={onChangeAnswer} />
      <QuestionAction
        actions={question.actions}
        onLikeClick={() => onLikeClick(question.id)}
        onDislikeClick={() => onDislikeClick(question.id)}
        onEditClick={() => onEditClick(question.id)}
        onScrapClick={() => onScrapClick(question.id)}
      />
    </div>
  );
}

export default Question;
