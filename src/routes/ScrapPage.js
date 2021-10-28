import produce from "immer";
import { useEffect, useState } from "react";
import {
  getScrappedQuestion,
  postInterviewListed,
  postQuestionAnswer,
  postQuestionScrap,
} from "../apis/questions";
import Header from "../common/Header";
import InterviewSetting from "../components/Scrap/InterviewSetting";
import ScrapList from "../components/Scrap/ScrapList";
import "./scrapPage.scss";

function ScrapPage() {
  const [scrappedQuestions, setScrappedQuestions] = useState(new Map());

  useEffect(async () => {
    const getScrappedList = await getScrappedQuestion();

    if (getScrappedList) {
      let scrappedList = new Map();

      if (getScrappedList.length) {
        getScrappedList.map((scrapped) => {
          scrappedList.set(scrapped.id, scrapped);
          scrappedList.get(scrapped.id).actions.editing = false;
        });

        setScrappedQuestions(scrappedList);
      }
    } else {
      console.log("fail to get scrapped questions");
    }
  }, []);

  function handleChangeAnswer(id, value) {
    setScrappedQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(id).answer = value;
        return draft;
      })
    );
  }

  function handleEditClick(id) {
    if (scrappedQuestions.get(id).actions.editing) {
      postQuestionAnswer(id, scrappedQuestions.get(id).answer);
    }

    setScrappedQuestions((prev) =>
      produce(prev, (draft) => {
        draft.get(id).actions.editing = !prev.get(id).actions.editing;
      })
    );
  }

  async function handleScrapClick(id) {
    // 눌려있는 스크랩 버튼을 눌렀다 -> 스크랩 하지 않겠다는 뜻
    // 따라서 스크랩 버튼을 누르면 스크랩질문 목록에서 지움
    if ((await postQuestionScrap(id)).status === 200) {
      setScrappedQuestions((prev) =>
        produce(prev, (draft) => {
          draft.delete(id);
          return draft;
        })
      );
    }
  }

  async function handleAddInterviewClick(id) {
    if ((await postInterviewListed(id)).status === 200) {
      setScrappedQuestions((prev) =>
        produce(prev, (draft) => {
          draft.get(id).actions.interviewListed =
            !prev.get(id).actions.interviewListed;
          return draft;
        })
      );
    }
  }

  function interviewQuestions() {
    let result = [];

    if (scrappedQuestions) {
      scrappedQuestions.forEach((question) => {
        if (question.actions.interviewListed) {
          result.push({ id: question.id, content: question.content });
        }
      });
    }

    return result;
  }

  return (
    <>
      <Header />
      <div className="scrapWrapperParent">
        <div className="scrapWrapper">
          <div className="scrapHeader">
            <p id="scrapTitle">모아보기</p>
            <p id="scrapExplain">
              유익했던 질문들을 한눈에 모아보고, <b>모의 면접</b>을 진행하세요!
            </p>
          </div>
          <div className="scrapInterviewWrapper">
            <ScrapList
              scrapQuestions={scrappedQuestions}
              onChangeAnswer={handleChangeAnswer}
              onEditClick={handleEditClick}
              onScrapClick={handleScrapClick}
              onAddInterviewClick={handleAddInterviewClick}
            />
            <InterviewSetting
              interviewQuestions={interviewQuestions()}
              onDeleteInterview={handleAddInterviewClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrapPage;
