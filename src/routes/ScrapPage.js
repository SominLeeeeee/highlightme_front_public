import produce from "immer";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import ScrapList from "../components/Scrap/ScrapList";
import "./scrapPage.scss";

function ScrapPage() {
  const [temp, setTemp] = useState(new Map());

  useEffect(() => {
    let tempttt = new Map();

    tempttt.set(587, {
      id: 587,
      content: "리액트와 뷰의 차이가 무엇인가요?",
      answer: "이름의 차이입니다 ㅋㅋ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
        editing: false,
      },
    });

    tempttt.set(589, {
      id: 589,
      content:
        "useState가 있는데 왜 보통 Redux, Recoil 등의 프레임워크를 사용하나요?",
      answer: "ㅁㅁㄴㄴ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
        editing: false,
      },
    });

    setTemp(tempttt);
  }, []);

  function handleChangeAnswer(id, value) {
    setTemp((prev) =>
      produce(prev, (draft) => {
        draft.get(id).answer = value;
        return draft;
      })
    );
  }

  function handleEditClick(id) {
    setTemp((prev) =>
      produce(prev, (draft) => {
        draft.get(id).actions.editing = !prev.get(id).actions.editing;
      })
    );
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
              scrapQuestions={temp}
              onChangeAnswer={handleChangeAnswer}
              onEditClick={handleEditClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrapPage;
