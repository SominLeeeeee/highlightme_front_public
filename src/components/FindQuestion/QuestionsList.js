import React, { useEffect, useState } from "react";

import config from "../../configs";
import { useParams } from "react-router-dom";
import "./questionsList.scss";
import Question from "../FindQuestion/Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";

function QuestionsList(props) {
  const { keyword } = { ...props };
  const [questions, setQuestions] = useState([]);
  //41, 53
  useEffect(() => {
    async function yes() {
      const result = await fetch(
        `${config.URL}/api/questions?keyword=${keyword}`,
        {
          method: "GET",
        }
      );
      console.log(result);
    }
  }, []);

  const arr = [
    {
      title: "React에서 redux를 사용해보신 적 있나요?",
    },
    {
      title: "React에서 redux를 사용해보신 적 있나요오오오오오오오오옹?",
    },
    {
      title:
        "React에서 redux를 사용해보신 적 있나아아아아아아아아아아아아아아아아아아아아아아아아아아요?",
    },
  ];
  // TODO: keyword에 대한 질문 받아오기

  return (
    <div className="questionsListParent">
      <HighlightText text="예상질문 리스트" marginBottom="3.6rem" />
      <ShadowBoxMedium paddingTop="4.8rem">
        <p id="keywordName">{keyword}</p>
        {arr.map((element) => (
          <Question questionText={element.title} />
        ))}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
