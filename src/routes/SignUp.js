import React, { useState } from "react";
import "../style/signup.scss";
import colors from "../style/colors.js";

import HighlightButton from "../components/HighlightButton";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import Asterisk from "../components/Asterisk";

function SignUp(props) {
  const { email } = { ...props };
  const [fieldSelected, setFieldSelected] = useState(0); // 분야
  const [jobSelected, setJobSelected] = useState(0); // 직무
  const [fieldJob, setFieldJob] = useState([]); // 선택한 분야와 직무

  const fieldArr = ["분야를 선택해주세요", "a", "b", "c"];
  const jobArr = [
    ["직무를 선택해주세요."],
    ["직무를 선택해주세요.", "aa", "ab", "ac"],
    ["직무를 선택해주세요.", "ba", "bb", "bc"],
    ["직무를 선택해주세요.", "ca", "cb", "cc"],
  ];

  function fieldOnChange(e) {
    setFieldSelected(e.target.selectedIndex);
    document.getElementById("selectJobForm").options.selectedIndex = 0;
    setJobSelected(0);
  }

  function jobOnChange(e) {
    setJobSelected(e.target.selectedIndex);

    setFieldJob(
      fieldJob.concat({
        field: fieldArr[fieldSelected],
        job: jobArr[fieldSelected][e.target.selectedIndex],
      })
    );
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
              {fieldArr.map((element, index) =>
                index == 0 ? (
                  <option disabled selected>
                    {element}
                  </option>
                ) : (
                  <option>{element}</option>
                )
              )}
            </select>

            <label for="job" className="inputLabel">
              직무선택 <span id="jobLimitHint">(최대 3개)</span> <Asterisk />
            </label>
            <select
              id="selectJobForm"
              background="/images/ic-sign-dropdown.svg"
              // style={jobSelected ? { color: "black" } : { color: "#c1c1c1" }}
              style={
                jobSelected !== 0 ? { color: "black" } : { color: "#c1c1c1" }
              }
              onChange={jobOnChange}
            >
              {jobArr[fieldSelected].map((element, index) =>
                index == 0 ? (
                  <option disabled selected style={{ color: "#c1c1c1" }}>
                    {element}
                  </option>
                ) : (
                  <option style={{ color: "black" }}>{element}</option>
                )
              )}
            </select>
          </div>
        </div>

        {fieldJob.map((element) => (
          <p>
            {element.field} {">"} {element.job}
          </p>
        ))}

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
