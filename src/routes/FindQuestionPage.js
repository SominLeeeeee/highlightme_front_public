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
  postQuestionScrap,
} from "../apis/questions";

import { getKeywords } from "../apis/keywords";
import Question from "../components/FindQuestion/QuestionContent";

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
      let postQuestionsResult = await postQuestions(selectedKeyword.keyword_id);
      let questionArr = new Map();

      postQuestionsResult.map((e) => {
        questionArr.set(e.id, e);
        questionArr.get(e.id).actions.editing = false;
        questionArr.get(e.id).keyword_id = selectedKeyword.keyword_id;
      });

      setQuestions(questionArr);
    }
  }, [keyword.selected]);

  function onKeywordClick(index) {
    setKeyword((prev) =>
      produce(prev, (draft) => {
        draft.selected = index;
        if (draft.userKeywords[index].answered === 0)
          draft.userKeywords[index].answered = 1;
        return draft;
      })
    );
  }

  async function onLikeClick(index) {
    //두가지가 동시에 눌리지 않도록 처리
    if (questions.get(index).actions.disliked) {
      onDislikeClick(index);
    }
    toggleLike(index);
    await postQuestionLike(index);
  }

  async function onDislikeClick(index) {
    //두가지가 동시에 눌리지 않도록 처리
    if (questions.get(index).actions.liked) {
      onLikeClick(index);
    }
    toggleDislike(index);
    await postQuestionDislike(index);
  }

  async function handleScrapClick(index) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(index).actions.scrapped = !prev.get(index).actions.scrapped;
        return draft;
      })
    );

    await postQuestionScrap(index);
  }

  async function handleEditClick(index) {
    const nowEditing = questions.get(index).actions.editing;

    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(index).actions.editing = !nowEditing;
        return draft;
      })
    );

    if (nowEditing) {
      return onAnswerPost(index);
    } else return false;
  }

  /**
   * Toggle liked on certain question
   */
  function toggleLike(index) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(index).actions.liked = !prev.get(index).actions.liked;
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
        draft.get(index).actions.disliked = !prev.get(index).actions.disliked;
        return draft;
      })
    );
  }

  /**
   * Post answer for question and update keyword selected type
   * @param {Number} index
   * @return tail question
   */
  async function onAnswerPost(index) {
    let result = await postQuestionAnswer(
      index,
      questions.get(index).keyword_id,
      questions.get(index).answer
    );

    setKeyword((prev) =>
      produce(prev, (draft) => {
        draft.userKeywords[draft.selected].answered = 2;
        return draft;
      })
    );

    if (result) {
      result = { ...result, type: "tail", from: index };
      setQuestions((prev) =>
        produce(prev, (draft) => {
          draft.set(result.id, result);
          draft.get(result.id).actions.editing = false;
          return draft;
        })
      );
    }

    return result;
  }

  /**
   * Update questions with new answer string
   * @param {Number} index Index of question
   * @param {String} answer Answer string user edited
   */
  function handleChangeAnswer(index, answer) {
    setQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(index).answer = answer;
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
            <KeywordGraphView
              keywords={keyword.userKeywords}
              onKeywordClick={onKeywordClick}
            />
            <QuestionList
              keyword={keyword.userKeywords[keyword.selected]}
              questions={questions}
              onLikeClick={onLikeClick}
              onDislikeClick={onDislikeClick}
              onEditClick={handleEditClick}
              onScrapClick={handleScrapClick}
              onChangeAnswer={handleChangeAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindQuestionPage;
