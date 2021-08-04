import React from "react";
import { useParams } from "react-router-dom";
import "../style/questionsList.scss";
import colors from "../style/colors.js";
import Question from "../components/Question.js";
import ShadowBox from "../components/ShadowBox";

function QuestionsList() {
  const { keyword } = useParams();

  const arr = [
    {
      title: "React에서 redux를 사용해보신 적 있나요?",
    },
  ];
  // TODO: keyword에 대한 질문 받아오기

  return (
    <div className="questionsListParent">
      <div className="questionsListParent2">
        <div id="questionsTitleParent">
          <p id="questionsTitle">예상질문 리스트</p>
          <div id="questionsTitleBackground" />
        </div>
        <ShadowBox
          aOfRgba="0.05"
          flexDirection="column"
          padding="22px"
          radius="8px"
        >
          <p id="keywordName">{keyword}</p>
          {arr.map((element) => (
            <Question questionText={element.title} />
          ))}
        </ShadowBox>
      </div>
    </div>
  );
}

export default QuestionsList;
