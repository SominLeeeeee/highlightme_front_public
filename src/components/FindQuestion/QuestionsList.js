import React, { useEffect, useState } from "react";

import config from "../../configs";
import { useParams } from "react-router-dom";
import "./questionsList.scss";
import Question from "../FindQuestion/Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import { useRecoilState } from "recoil";
import { atomUserInfo, atomKeyword } from "../../recoil/userStore";

function QuestionsList(props) {
  const [questions, setQuestions] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [keyword, setKeyword] = useRecoilState(atomKeyword);

  //41, 53
  useEffect(async () => {
    let result = await fetch(`${config.URL}/api/questions`, {
      method: "POST",
      body: new URLSearchParams({
        user_keyword_id: keyword.selectedKeyword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        res.questions.map((e) => {
          setQuestions((prev) => {
            let temp = prev.concat({ content: e.content });
            return temp;
          });
        });
      });
  }, [keyword.selectedKeyword]);

  useEffect(() => {
    console.log("questions", questions);
  }, [questions]);
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
        <p id="keywordName">{keyword.selectedKeyword}</p>
        {questions.map((element) => (
          <Question questionText={element.content} />
        ))}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
