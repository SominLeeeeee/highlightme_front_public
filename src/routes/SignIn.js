import React from "react";
import "../style/login.scss";
import colors from "../style/colors";
import HighlightButton from "../components/atom/HighlightButton";

function Home() {
  return (
    <div className="loginParent">
      <div className="loginForm">
        {/* <!-- TODO: 중앙정렬 --> */}
        <p className="loginTitle">LOGIN</p>
        {/* <!-- TODO: fontface 적용해서 글꼴 바꾸기 --> */}
        <div className="loginInputDiv">
          <label for="email" className="loginInputLabel">
            이메일
          </label>
          <input
            type="email"
            className="loginInputBox"
            id="email"
            placeholder="이메일을 입력해주세요."
          />
          {/* <!-- TODO: 넓이 이상한거 수정하기 --> */}
        </div>
        <div className="loginInputDiv">
          <label for="pw" className="loginInputLabel">
            비밀번호
          </label>
          <input
            type="password"
            className="loginInputBox"
            id="pw"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>

        <HighlightButton
          text="로그인"
          backgroundColor={colors.subyellowb}
          color={colors.black}
        />

        {/* <!--- TODO: 로그인 버튼 누르면 전송되는 거 구현해야 함 --> */}
        <div id="loginEtcDiv">
          <div>
            {/* <!-- TODO: checkbox css --> */}
            <input type="checkbox" className="checkbox" id="maintainLogin" />
            <label for="maintainLogin" id="maintainLoginText">
              로그인 유지
            </label>
          </div>
          <a id="aToFindIdpw">아이디•비밀번호 찾기</a>
        </div>
        <a id="aToSignUp">아직 하이라이트미 회원이 아니신가요?</a>
        {/* <!-- TODO: 회원가입 페이지로 연결하기 --> */}
      </div>
    </div>
  );
}

export default Home;
