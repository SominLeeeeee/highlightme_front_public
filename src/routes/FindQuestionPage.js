import React, { useEffect } from "react";
import "./findQuestionPage.scss";

import KeywordGraphView from "../components/FindQuestion/KeywordGraphView";
import QuestionList from "../components/FindQuestion/QuestionsList";
import Header from "../common/Header";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomMenu, atomKeyword, atomQuestion } from "../recoil/userStore";
import produce from "immer";

import {
  postQuestions,
  postQuestionAnswer,
  postQuestionLike,
  postQuestionDislike,
} from "../apis/questions";

import { getKeywords } from "../apis/keywords";

function FindQuestionPage() {
  const [menu, setMenu] = useRecoilState(atomMenu);
  const [questions, setQuestions] = useRecoilState(atomQuestion);
  const [keyword, setKeyword] = useRecoilState(atomKeyword);

  useEffect(async () => {
    setMenu("질문찾기");

    const keywords = await getKeywords();

    if (keywords) {
      setKeyword((prev) =>
        produce(prev, (draft) => {
          draft.userKeywords = keywords;
          return draft;
        })
      );
    } else {
      console.log("couldn't get keywords 😭");
    }
  }, []);

  useEffect(async () => {
    const selectedKeyword = keyword.userKeywords[keyword.selected];

    if (selectedKeyword) {
      let questions = await postQuestions(selectedKeyword.user_keyword_id);
      setQuestions(
        questions.map((e) => ({
          ...e,
          user_keyword_id: selectedKeyword.user_keyword_id,
        }))
      );
    }
  }, [keyword.selected]);

  async function onLikeClick(index) {
    //두가지가 동시에 눌리지 않도록 처리
    if (questions[index].disliked) {
      onDislikeClick(index);
    }
    toggleLike(index);
    await postQuestionLike(questions[index].question_id);
  }

  async function onDislikeClick(index) {
    //두가지가 동시에 눌리지 않도록 처리
    if (questions[index].liked) {
      onLikeClick(index);
    }
    toggleDislike(index);
    await postQuestionDislike(questions[index].question_id);
  }

  /**
   * Toggle liked on certain question
   */
  function toggleLike(index) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft[index].liked = !prev[index].liked;
        return draft;
      })
    );
  }

  /**
   * Toggle disliked on certain question
   */
  function toggleDislike(index) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft[index].disliked = !prev[index].disliked;
        return draft;
      })
    );
  }

  /**
   * Post answer for question and update keyword selected type
   * @param {Number} userQuestionId
   * @param {Number} userKeywordId
   * @param {String} answer
   * @return tail question
   */
  async function onAnswerPost(userQuestionId, userKeywordId, answer) {
    let result = await postQuestionAnswer(
      userQuestionId,
      userKeywordId,
      answer
    );

    result = await result.json();

    setKeyword((prev) =>
      produce(prev, (draft) => {
        draft.userKeywords[draft.selected].answered = 2;
        return draft;
      })
    );

    if (result.isAnswerSuccess) {
      return result.tailQuestion;
    } else return false;
  }

  /**
   * Update questions with new answer string
   * @param {Number} index Index of question
   * @param {String} answer Answer string user edited
   */
  function onAnswerEdit(index, answer) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft[index].answer = answer;
        return draft;
      })
    );
  }

  return (
    <div>
      <Header />
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
            <KeywordGraphView keywords={keyword.userKeywords} />
            <QuestionList
              keyword={keyword.userKeywords[keyword.selected]}
              questions={questions}
              onLikeClick={onLikeClick}
              onDislikeClick={onDislikeClick}
              onAnswerEdit={onAnswerEdit}
              onAnswerPost={onAnswerPost}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindQuestionPage;
