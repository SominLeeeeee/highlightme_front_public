import React from "react";
import GoogleLoginPage from "../components/GoogleLoginButton";
import HighlightText from "../components/HighlightText";
import "../style/gotoSignUp.scss";

function GotoSignUp() {
  return (
    <div className="gotoSignUpWrapper">
      <div className="gotoSignUp">
        <img id="signupQuotation" src="/images/ic-quotation.svg" />
        <p id="signupPhrase1">
          자기소개서로
          <br />
          나에게 맞는 질문을
          <br />
          예상 받아보세요
        </p>
        <p id="signupPhrase2">
          이제 면접 대비는{" "}
          <HighlightText
            fontSize="3rem"
            marginBottom="0"
            fontFamily="AppleSDGothicNeo-ExtraBold"
          >
            하이라이트미
          </HighlightText>
        </p>
        <GoogleLoginPage />
      </div>
      <p id="signupAgree">
        간편하게 시작하기를 통해 <b>서비스 이용약관</b>과{" "}
        <b>개인정보처리방침</b>에 동의합니다.
      </p>
    </div>
  );
}

export default GotoSignUp;
