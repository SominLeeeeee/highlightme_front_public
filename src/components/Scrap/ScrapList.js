import produce from "immer";
import EditButton from "../atom/EditButton";
import HighlightText from "../atom/HighlightText";
import QuestionContent from "../FindQuestion/QuestionContent";

function ScrapList(props) {
  const { scrapQuestions, onChangeAnswer, onEditClick } = { ...props };

  function makeScrapListJSX() {
    let scrapListJSX = [];

    scrapQuestions.forEach((question) => {
      scrapListJSX.push(
        <>
          <QuestionContent
            question={question}
            onChangeAnswer={onChangeAnswer}
          />
          <EditButton
            onClick={() => onEditClick(question.id)}
            status={question.actions.editing ? "active" : "default"}
          />
        </>
      );
    });

    return scrapListJSX;
  }

  return (
    <div>
      <HighlightText text="질문 리스트" />
      {scrapQuestions ? makeScrapListJSX() : <p>nope!</p>}
    </div>
  );
}

export default ScrapList;
