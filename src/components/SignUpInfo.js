import React, { useState } from "react";
import Asterisk from "./atom/Asterisk";
import HighlightButton from "./HighlightButton";
import SelectedFieldJob from "../components/SelectedFieldJob";
import colors from "../style/colors";
import "./signUpInfo.scss";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";
import config from "../configs";

function SignUpInfo() {
  const [fieldSelected, setFieldSelected] = useState(0); // 분야
  const [jobSelected, setJobSelected] = useState(0); // 직무
  const [fieldJob, setFieldJob] = useState([]); // 선택한 분야와 직무
  const [signUp, setSignUp] = useRecoilState(atomSignUp);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  const email = userInfo.email;
  const fieldArr = ["분야를 선택해주세요", "IT / 컴퓨터", "디자인", "c"];
  const jobArr = [
    ["직무를 선택해주세요."],
    ["직무를 선택해주세요.", "iOS 개발", "ab", "ac"],
    ["직무를 선택해주세요.", "그래픽 디자인", "UI/UX 디자인", "bc"],
    ["직무를 선택해주세요.", "ca", "cb", "cc"],
  ];

  function fieldOnChange(e) {
    setFieldSelected(e.target.selectedIndex);
    document.getElementById("selectJobForm").options.selectedIndex = 0;
    setJobSelected(0);
  }

  fetch(`${config.URL}/api/fields`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("getJob", res);
    });

  function jobOnChange(e) {
    setJobSelected(e.target.selectedIndex);
    setFieldJob(
      fieldJob.concat({
        field: fieldArr[fieldSelected],
        job: jobArr[fieldSelected][e.target.selectedIndex],
      })
    );
  }

  function fieldJobOnRemove(idx) {
    setFieldJob(fieldJob.filter((element, index, array) => index != idx));
  }

  function registerOnClick() {
    setSignUp({ signUpLevel: 1 });

    const fieldJobArr = [];
    fieldJob.map((element, index, array) => {
      console.log(index);
      fieldJobArr.push(index);
    });

    const postFieldJobResult = fetch(`${config.URL}/api/fields`, {
      method: "POST",
      body: new URLSearchParams({
        user_id: userInfo.id,
        field_ids: JSON.stringify(fieldJobArr),
      }),
    });

    console.log("postFieldJobResult", postFieldJobResult);
  }

  return (
    <div>
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

      <SelectedFieldJob fieldJob={fieldJob} onRemove={fieldJobOnRemove} />

      <HighlightButton
        text="가입하기!"
        backgroundColor={
          fieldJob.length > 0 ? colors.mainyellowa : colors.darkgray
        }
        color={colors.white}
        onClick={registerOnClick}
      />
    </div>
  );
}

export default SignUpInfo;
