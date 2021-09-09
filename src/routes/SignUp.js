import React, { useState } from "react";
import "../style/signup.scss";
import colors from "../style/colors.js";

import HighlightButton from "../components/HighlightButton";
import InputBox from "../components/InputBox";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import Asterisk from "../components/Asterisk";

function SignUp(props) {
  const { email } = { ...props };
  const [fieldSelected, setFieldSelected] = useState(false); // 분야
  const [jobSelected, setJobSelected] = useState(false); // 직무
  const [jobList, setJobList] = useState([]); // 분야에 따른 직무 리스트

  const taskList = [
    { field: "a", job: ["aa", "ab", "ac"] },
    { field: "b", job: ["ba", "bb", "bc"] },
    { field: "c", job: ["ca", "cb", "cc"] },
  ];

  function fieldOnChange(e) {
    if (e.target.value !== false) setFieldSelected(e.target.value);

    taskList.map((element) => {
      if (element.field === e.target.value) {
        setJobList(element.job);
      }
    });
  }

  function jobOnChange(e) {
    if (e.target.value !== false) setJobSelected(e.target.value);
  }

  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
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
            <label for="field" className="inputLabel">
              분야선택 <Asterisk />
            </label>
            <select
              background="/images/ic-sign-dropdown.svg"
              style={fieldSelected ? { color: "black" } : { color: "#c1c1c1" }}
              onChange={fieldOnChange}
            >
              <option disabled selected>
                분야를 선택해주세요.
              </option>
              {taskList.map((element) => (
                <option>{element.field}</option>
              ))}
            </select>

            <label for="job" className="inputLabel">
              직무선택 <span id="jobLimitHint">(최대 3개)</span> <Asterisk />
            </label>
            <select
              background="/images/ic-sign-dropdown.svg"
              style={jobSelected ? { color: "black" } : { color: "#c1c1c1" }}
              onChange={jobOnChange}
            >
              {" "}
              <option disabled selected>
                직무를 선택해주세요.
              </option>
              {jobList.map((element) => (
                <option>{element}</option>
              ))}
            </select>
          </div>
        </div>

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
