import "./signUpComplete.scss";

import { useHistory } from "react-router-dom";

function SignUpComplete() {
  const history = useHistory();

  function onNowClick() {
    history.push("/coverletter");
  }

  function onLaterClick() {
    history.push("/");
  }

  return (
    <div className="signUpCompleteWrapper">
      <img src="/images/ic-sign-finish.svg" id="completeImage" />
      <p id="completeText">회원가입 완료</p>
      <p id="congratuText">
        하이라이트미 <b>가입을 환영</b>합니다! :)
      </p>
      <p id="registerText">
        <b>자기소개서를 등록</b>하면 더 많은 서비스를 이용할 수 있어요
      </p>
      <button id="regiButtonNow" onClick={onNowClick}>
        지금 등록할게요!
      </button>
      <button id="regiButtonLater" onClick={onLaterClick}>
        나중에 등록할게요
      </button>
    </div>
  );
}

export default SignUpComplete;
