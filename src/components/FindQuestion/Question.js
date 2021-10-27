import { useState } from "react";
import QuestionAction from "./QuestionAction";
import QuestionContent from "./QuestionContent";
import "./question.scss";

function Question(props) {
  const {
    question,
    onLikeClick,
    onDislikeClick,
    onEditClick,
    onChangeAnswer,
    onScrapClick,
  } = {
    ...props,
  };

  const [tailQuestion, setTailQuestion] = useState(false);

  async function handleEditClick() {
    let result = await onEditClick(question.id);
    setTailQuestion(result);
  }

  return (
    <div className="question">
      <QuestionContent question={question} onChangeAnswer={onChangeAnswer} />
      <QuestionAction
        actions={question.actions}
        onLikeClick={() => onLikeClick(question.id)}
        onDislikeClick={() => onDislikeClick(question.id)}
        onEditClick={() => handleEditClick()}
        onScrapClick={() => onScrapClick(question.id)}
      />

      {tailQuestion && tailQuestion.from === question.id ? (
        <div className="tailQuestion">
          <img src="/images/ic-mydocs-tailquestion.svg" />
          <Question
            question={tailQuestion}
            onChangeAnswer={onChangeAnswer}
            onEditClick={onEditClick}
            onLikeClick={onLikeClick}
            onDislikeClick={onDislikeClick}
            onScrapClick={onScrapClick}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
