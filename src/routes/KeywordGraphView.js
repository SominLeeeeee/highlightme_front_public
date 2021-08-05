import React from "react";
import "../style/questionsList.scss";
import colors from "../style/colors.js";
import Question from "../components/Question.js";
import ShadowBox from "../components/ShadowBox";
import HighlightText from "../components/HighlightText";

function QuestionsList() {
  return (
    <div className="parentForCenter">
      <div className="parent">
        <HighlightText text="키워드 리스트" color="$black"></HighlightText>
      </div>
    </div>
  );
}

export default QuestionsList;
