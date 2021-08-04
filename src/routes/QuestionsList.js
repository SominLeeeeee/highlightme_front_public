import React from "react";
import "../style/questionsList.scss";
import colors from "../style/colors.js";
import Question from "../components/Question.js";
import ShadowBox from "../components/ShadowBox";

function QuestionsList() {
  return (
    <div className="questionsListParent">
      <div className="questionsListParent2">
        <div id="questionsListTitleParent">
          <p id="questionsListTitle">예상질문 리스트</p>
          <div id="questionsListTitleBackground" />
        </div>
        <ShadowBox
          aOfRgba="0.05"
          flexDirection="column"
          padding="22px"
          radius="8px"
        >
          <p id="keywordName">React</p>
          <Question questionText="React에서 Redux를 사용해 본 적 있나요?" />
        </ShadowBox>
      </div>
    </div>
  );
}

export default QuestionsList;
