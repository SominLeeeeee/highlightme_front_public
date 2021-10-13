import React, { useEffect, useState } from "react";

import config from "../../configs";
import "./questionsList.scss";
import Question from "../FindQuestion/Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import { useRecoilState } from "recoil";
import { atomKeyword } from "../../recoil/userStore";

function QuestionsList(props) {
  const [questions, setQuestions] = useState([]);
  const [keyword, setKeyword] = useRecoilState(atomKeyword);

  /* 선택한 키워드가 변경되면 해당 키워드의 질문을 가져와서 questions에 저장 */
  useEffect(async () => {
    await fetch(`${config.URL}/api/questions`, {
      method: "POST",
      body: new URLSearchParams({
        user_keyword_id: keyword.selectedKeywordId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions([]);
        res.questions.map((e) => {
          setQuestions((prev) =>
            prev.concat({ content: e.content, answer: e.answer })
          );
        });
      });
  }, [keyword.selectedKeywordId]);

  return (
    <div className="questionsListParent">
      <HighlightText text="예상질문 리스트" marginBottom="3.6rem" />
      <ShadowBoxMedium paddingTop="4.8rem">
        <p id="keywordName">{keyword.selectedKeyword}</p>
        {questions.map((element) => (
          <Question question={element.content} answer={element.answer} />
        ))}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
