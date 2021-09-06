import React from "react";
import GoogleLoginPage from "../components/GoogleLoginButton";
import "../style/gotoSignUp.scss";

function GotoSignUp() {
  return (
    <div>
      <img src="/images/ic-quotation.svg" />
      <p>
        자기소개서로
        <br />
        나에게 맞는 질문을
        <br />
        예상 받아보세요
      </p>
      <p>이제 면접 대비는 하이라이트미</p>
      <GoogleLoginPage></GoogleLoginPage>
      <p>
        간편하게 시작하기를 통해 <b>서비스 이용약관</b>과{" "}
        <b>개인정보처리방침</b>에 동의합니다.
      </p>
    </div>
  );
}

export default GotoSignUp;
