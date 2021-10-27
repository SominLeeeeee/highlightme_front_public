import produce from "immer";
import EditButton from "../atom/EditButton";
import HighlightText from "../atom/HighlightText";
import QuestionContent from "../FindQuestion/QuestionContent";
import ScrapAction from "./ScrapAction";
import "./scrapList.scss";

function ScrapList(props) {
  const { scrapQuestions, onChangeAnswer, onEditClick, onScrapClick } = {
    ...props,
  };

  function makeScrapListJSX() {
    let scrapListJSX = [];

    scrapQuestions.forEach((question) => {
      scrapListJSX.push(
        <>
          <QuestionContent
            question={question}
            onChangeAnswer={onChangeAnswer}
          />
          {/* <EditButton
            onClick={() => onEditClick(question.id)}
            status={question.actions.editing ? "active" : "default"}
          /> */}
          <ScrapAction
            actions={question.actions}
            onEditClick={() => onEditClick(question.id)}
            onScrapClick={() => onScrapClick(question.id)}
          />
        </>
      );
    });

    return scrapListJSX;
  }

  return (
    <div className="scrapList">
      <HighlightText text="질문 리스트" />
      {scrapQuestions ? makeScrapListJSX() : <p>nope!</p>}
    </div>
  );
}

export default ScrapList;
