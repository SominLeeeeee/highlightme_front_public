import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import "./interviewSetting.scss";

function InterviewSetting(props) {
  const { interviewQuestions, onDeleteInterview } = { ...props };

  // console.log("sss", interviewQuestions);
  function interviewListJSX() {
    return interviewQuestions.map((question) => (
      <div className="interviewContent">
        <p>{question.content}</p>
        <img
          src="/images/ic-sign-delete-gray.svg"
          onClick={() => onDeleteInterview(question.id)}
        />
      </div>
    ));
  }

  return (
    <div className="interviewSetting">
      <HighlightText text="모의면접 설정" />
      <ShadowBoxMedium
        padding="2rem"
        paddingTop="2.5rem"
        paddingBottom="1.5rem"
      >
        <p id="interviewListTitle">질문 목록</p>
        {interviewQuestions ? interviewListJSX() : <></>}
      </ShadowBoxMedium>
    </div>
  );
}

export default InterviewSetting;
