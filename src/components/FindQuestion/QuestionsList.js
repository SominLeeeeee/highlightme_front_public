import React, { useEffect, useState } from "react";

import config from "../../configs";
import "./questionsList.scss";
import Question from "../FindQuestion/Question.js";
import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import { useRecoilState } from "recoil";
import { atomKeyword, atomQuestion } from "../../recoil/userStore";

function QuestionsList(props) {
  const [questions, setQuestions] = useRecoilState(atomQuestion);
  const [keyword, setKeyword] = useRecoilState(atomKeyword);
  let selected = keyword.userKeywords[keyword.selected];

  /* 선택한 키워드가 변경되면 해당 키워드의 질문을 가져와서 questions에 저장 */
  useEffect(async () => {
    selected = keyword.userKeywords[keyword.selected];

    if (selected !== undefined) {
      await fetch(`${config.URL}/api/questions`, {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams({
          user_keyword_id: selected.user_keyword_id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setQuestions([]);
          res.questions.map((e) => {
            setQuestions((prev) =>
              prev.concat({
                question_id: e.question_id,
                content: e.content,
                answer: e.answer,
                user_question_id: e.user_question_id,
                user_keyword_id: selected.user_keyword_id,
                likes: e.likes,
                dislikes: e.dislikes,
              })
            );
          });
        });
    }
  }, [keyword.selected]);

  return (
    <div className="questionsListParent">
      <HighlightText text="예상질문 리스트" marginBottom="3.6rem" />
      <ShadowBoxMedium>
        {selected !== undefined ? (
          <p id="keywordName">{selected.keyword}</p>
        ) : (
          <div className="keywordNull">
            <p className="keywordClick"> 키워드를 클릭해보세요! 🙂</p>
          </div>
        )}
        {selected !== undefined ? (
          questions.map((element, index, arr) => <Question id={index} />)
        ) : (
          <div />
        )}
      </ShadowBoxMedium>
    </div>
  );
}

export default QuestionsList;
