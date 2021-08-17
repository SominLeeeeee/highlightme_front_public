import React from "react";
import KeywordGraphView from "./KeywordGraphView";
import QuestionList from "./QuestionsList";
import "../style/findQuestion.scss";

function FindQuestion() {
  return (
    <div className="findQuestionWrapperParent">
      <div className="findQuestionWrapper">
        <KeywordGraphView />
        <QuestionList />
      </div>
    </div>
  );
}

export default FindQuestion;
