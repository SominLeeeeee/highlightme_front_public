import React from "react";
import KeywordGraphView from "./KeywordGraphView";
import QuestionList from "./QuestionsList";
import "./findQuestion.scss";

function FindQuestion() {
  return (
    <div className="findQuestionWrapperParent">
      <div className="findQuestionWrapper">
        <div className="findQuestionHeader">
          <p id="findQuestionTitle">질문찾기</p>
          <p id="findQuestionExplain">
            자기소개서와 연관된 <b>면접 예상 질문</b>을 파악하고, 실제 면접을
            준비해보세요!
          </p>
        </div>
        <div className="keywordQuestionWrapper">
          {/* 5:6 */}
          <KeywordGraphView />
          <QuestionList />
        </div>
      </div>
    </div>
  );
}

export default FindQuestion;
