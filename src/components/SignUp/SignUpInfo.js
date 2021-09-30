import React, { useEffect, useState } from "react";
import Asterisk from "../atom/Asterisk";
import HighlightButton from "../atom/HighlightButton";
import SelectedFieldJob from "../molcule/SelectedFieldJob";
import colors from "../../style/colors";
import "./signUpInfo.scss";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../../recoil/userStore";
import config from "../../configs";

function SignUpInfo() {
  const [fieldSelected, setFieldSelected] = useState(0); // 분야
  const [jobSelected, setJobSelected] = useState(0); // 직무
  const [fieldJob, setFieldJob] = useState([]); // 선택한 분야와 직무 (string)
  const [userJob, setUserJob] = useState([]); // 선택한 분야와 직무 (int)

  const [signUp, setSignUp] = useRecoilState(atomSignUp);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  const [fieldList, setFieldList] = useState([
    { id: 0, name: "직무를 선택해주세요." },
  ]);
  const [jobList, setJobList] = useState([
    [{ id: 0, name: "직무를 선택해주세요." }],
  ]);

  const email = userInfo.email;

  /* 서버로부터 직무 정보 불러오고 파싱 */
  useEffect(() => {
    fetch(`${config.URL}/api/fields`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        fieldParsing(res.result.bigField);
      });
  }, []);

  function fieldParsing(bigField) {
    var tempArr = fieldList;
    bigField.map((e) => {
      tempArr = tempArr.concat([{ id: e.id, name: e.name }]);
      jobParsing(e.id, e.smallGroup);
    });

    setFieldList(tempArr);
  }

  function jobParsing(fieldId, smallGroup) {
    var tempArr = [{ id: 0, name: "직무를 입력해주세요" }];
    smallGroup.map((e) => {
      tempArr = tempArr.concat([{ id: e.id, name: e.name }]);
    });

    var tempArr2 = jobList;
    tempArr2[fieldId] = tempArr;

    setJobList(tempArr2);
  }

  function fieldOnChange(e) {
    setFieldSelected(e.target.selectedIndex);
    document.getElementById("selectJobForm").options.selectedIndex = 0;
    setJobSelected(0);
  }

  function jobOnChange(e) {
    setJobSelected(e.target.selectedIndex);
    setFieldJob(
      fieldJob.concat({
        field: fieldList[fieldSelected].name,
        job: jobList[fieldSelected][e.target.selectedIndex].name,
      })
    );
    setUserJob(
      userJob.concat(jobList[fieldSelected][e.target.selectedIndex].id)
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
        field_ids: JSON.stringify(userJob),
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
            {fieldList.map((element, index) =>
              index == 0 ? (
                <option disabled selected>
                  {element.name}
                </option>
              ) : (
                <option>{element.name}</option>
              )
            )}
          </select>

          <label for="job" className="inputLabel">
            직무선택 <span id="jobLimitHint">(최대 3개)</span> <Asterisk />
          </label>
          <select
            id="selectJobForm"
            background="/images/ic-sign-dropdown.svg"
            style={
              jobSelected !== 0 ? { color: "black" } : { color: "#c1c1c1" }
            }
            onChange={jobOnChange}
          >
            {jobList[fieldSelected].map((element, index) =>
              index == 0 ? (
                <option disabled selected style={{ color: "#c1c1c1" }}>
                  {element.name}
                </option>
              ) : (
                <option style={{ color: "black" }}>{element.name}</option>
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
