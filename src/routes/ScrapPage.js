import produce from "immer";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import InterviewSetting from "../components/Scrap/InterviewSetting";
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
        scrapped: true,
        interviewListed: true,
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
        scrapped: true,
        interviewListed: false,
        editing: false,
      },
    });

    tempttt.set(590, {
      id: 590,
      content: "useState는 동기인가요, 비동기인가요? 그 이유는 무엇인가요?",
      answer: "aaa",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: true,
        editing: false,
      },
    });

    tempttt.set(591, {
      id: 591,
      content: "591번 질문입니다",
      answer: "이름의 차이입니다 ㅋㅋ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: true,
        editing: false,
      },
    });

    tempttt.set(592, {
      id: 592,
      content: "592번 질문입니다",
      answer: "ㅁㅁㄴㄴ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: false,
        editing: false,
      },
    });

    tempttt.set(593, {
      id: 593,
      content: "593번 질문입니다",
      answer: "aaa",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: true,
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

  function handleScrapClick(id) {
    // setTemp((prev) =>
    //   produce(prev, (draft) => {
    //     draft.get(id).actions.scrapped = !prev.get(id).actions.scrapped;
    //     return draft;
    //   })
    // );

    // 눌려있는 스크랩 버튼을 눌렀다 -> 스크랩 하지 않겠다는 뜻
    // 따라서 스크랩 버튼을 누르면 스크랩질문 목록에서 지움
    setTemp((prev) =>
      produce(prev, (draft) => {
        draft.delete(id);
        return draft;
      })
    );
  }

  function interviewQuestions() {
    let result = [];

    temp.forEach((question) => {
      if (question.actions.interviewListed) {
        result.push({ id: question.id, content: question.content });
      }
    });

    console.log("interview", result);
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
              scrapQuestions={temp}
              onChangeAnswer={handleChangeAnswer}
              onEditClick={handleEditClick}
              onScrapClick={handleScrapClick}
            />
            <InterviewSetting interviewQuestions={interviewQuestions()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrapPage;
