import React from "react";
import "../style/signup.scss";
import colors from "../style/colors.js";

import HighlightButton from "../components/HighlightButton";
import InputBox from "../components/InputBox";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import Asterisk from "../components/Asterisk";

function SignUp(props) {
  // const { email } = { ...props };
  const email = "somin116@gmail.com";
  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        {/* <!-- TODO: 중앙정렬 --> */}
        <p className="signUpTitle">
          정보를 입력하면 <br></br>다양한 서비스를 만나볼 수 있어요!
        </p>
        <div id="signUpUserInfo">
          <div className="inputDivEmail">
            <label for="email" className="inputLabel">
              이메일 <Asterisk />
            </label>
            <input type="text" disabled value={email} />
          </div>
          <div className="inputDivJob">
            <label for="job" className="inputLabel">
              직무선택 <span id="jobLimitHint">(최대 3개)</span> <Asterisk />
            </label>
            <input placeholder="직무를 선택해주세요" />
            <label for="task" className="inputLabel">
              분야선택 <Asterisk />
            </label>
            <input placeholder="분야를 선택해주세요 " />
          </div>
        </div>
        {/* TODO: 직무선택, 분야선택 만들기 */}

        <HighlightButton
          text="가입하기!"
          backgroundColor={colors.darkgray}
          color={colors.white}
        />
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUp;
