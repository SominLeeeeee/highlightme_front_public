import React from "react";
import "../style/signup.scss";
import "../style/colors.scss";
import colors from "../style/colors.js";

import HighlightButton from "../components/HighlightButton";
import InputBox from "../components/InputBox";

function SignUp() {
  return (
    <div className="signUpParent">
      <p> logo</p>
      <div className="signUpForm">
        {/* <!-- TODO: 중앙정렬 --> */}
        <p className="signUpTitle">
          정보를 입력하면 <br></br>다양한 서비스를 만나볼 수 있어요!
        </p>
        {/* <!-- TODO: fontface 적용해서 글꼴 바꾸기 --> */}
        <div className="inputDivEmail">
          <label for="email" className="inputLabel">
            이메일
          </label>
          <InputBox
            text="이메일을"
            backgroundColor="white"
            color="$darkgray"
            type="email"
          />
        </div>
        <div className="inputDivPw">
          <label for="pw" className="inputLabel">
            비밀번호
          </label>
          <InputBox
            text="비밀번호를"
            type="password"
            backgroundColor={colors.white}
            color={colors.darkgray}
          />
          <InputBox
            text="비밀번호를 한번 더"
            type="password"
            backgroundColor="#f8f8f8"
            color={colors.darkgray}
          />
        </div>

        {/* TODO: 직무선택, 분야선택 만들기 */}

        <HighlightButton
          text="가입하기!"
          backgroundColor={colors.darkgray}
          color={colors.white}
        />
      </div>
    </div>
  );
}

export default SignUp;
