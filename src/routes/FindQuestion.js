import React from "react";
import KeywordGraphView from "./KeywordGraphView";
import QuestionList from "./QuestionsList";
import "../style/findQuestion.scss";

function FindQuestion() {
  return (
    <div className="findQuestionWrapper">
      <KeywordGraphView />
      <QuestionList />
    </div>
  );
}

export default FindQuestion;
