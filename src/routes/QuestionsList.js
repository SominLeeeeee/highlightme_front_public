import React from "react";
import { useParams } from "react-router-dom";
import "../style/questionsList.scss";
import Question from "../components/Question.js";
import HighlightText from "../components/HighlightText";
import ShadowBoxMedium from "../components/ShadowBoxMedium";

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
        <HighlightText
          text="예상질문 리스트"
          marginBottom="1.75rem"
        ></HighlightText>
        <ShadowBoxMedium paddingTop="4.8rem">
          <p id="keywordName">{keyword}</p>
          {arr.map((element) => (
            <Question questionText={element.title} />
          ))}
        </ShadowBoxMedium>
      </div>
    </div>
  );
}

export default QuestionsList;
