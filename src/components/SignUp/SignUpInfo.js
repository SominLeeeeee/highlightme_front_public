import React, { useEffect, useState } from "react";
import Asterisk from "../atom/Asterisk";
import HighlightButton from "../atom/HighlightButton";
import FieldJobSelected from "../molcule/FieldJobSelected";
import colors from "../../style/colors";
import "./signUpInfo.scss";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../../recoil/userStore";
import ErrNotice from "../atom/ErrNotice";
import produce from "immer";
import { getFieldList, postField } from "../../apis/fields";

function SignUpInfo() {
  const [fieldJob, setFieldJob] = useState([]); // 선택한 분야와 직무 (string)
  const [userJob, setUserJob] = useState([]); // 선택한 분야와 직무 (int)
  const [jobSelectErr, setJobSelectErr] = useState(false);

  const [signUp, setSignUp] = useRecoilState(atomSignUp);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  const [fields, setFields] = useState([
    {
      id: 0,
      name: "직무를 선택해주세요",
      jobs: [{ id: 0, name: "직무를 선택해주세요" }],
    },
  ]);
  const [fieldSelected, setFieldSelected] = useState(0); // 분야
  const [jobSelected, setJobSelected] = useState(0); // 직무

  const email = userInfo.email;

  /* 서버로부터 직무 정보 불러오고 파싱 */
  useEffect(() => {
    async function fetchData() {
      let res = await getFieldList();

      // 모든 분야의 첫번째 직무로 빈 직무를 넣어줌
      res = res.map((e) => {
        e.jobs = [{ id: 0, name: "직무를 선택해주세요" }, ...e.jobs];
        return e;
      });

      setFields((prev) =>
        produce(prev, (draft) => {
          draft = prev.concat(res);
          return draft;
        })
      );
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("asdf", fields);
  }, [fields]);

  function onFieldChange(e) {
    setFieldSelected(e.target.selectedIndex);
    document.getElementById("selectJobForm").options.selectedIndex = 0;
    setJobSelected(0);
  }

  function onJobChange(e) {
    //최대 3개 선택
    if (userJob.length < 3) {
      setJobSelected(e.target.selectedIndex);
      setFieldJob(
        fieldJob.concat({
          field: fields[fieldSelected].name,
          job: fields[fieldSelected].jobs[e.target.selectedIndex].name,
        })
      );
      setUserJob(
        userJob.concat(fields[fieldSelected].jobs[e.target.selectedIndex].id)
      );
    } else {
      setJobSelectErr(true);
      setTimeout(() => setJobSelectErr(false), 1500);
    }
  }

  function onFieldJobRemove(idx) {
    setFieldJob(fieldJob.filter((element, index, array) => index != idx));
  }

  async function onRegisterClick() {
    setSignUp({ signUpLevel: 1 });

    console.log(userJob);

    const statusCode = await postField(userJob);
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

        <div className="selectFieldJobDiv">
          <label for="field" className="inputLabel">
            분야선택 <Asterisk />
          </label>
          <select
            background="/images/ic-sign-dropdown.svg"
            style={fieldSelected ? { color: "black" } : { color: "#c1c1c1" }}
            onChange={onFieldChange}
          >
            {fields &&
              fields.map((e, i) =>
                i === 0 ? (
                  <option disabled selected>
                    {e.name}
                  </option>
                ) : (
                  <option>{e.name}</option>
                )
              )}
            {/* {fieldList.map((element, index) =>
              index == 0 ? (
                <option disabled selected>
                  {element.name}
                </option>
              ) : (
                <option>{element.name}</option>
              )
            )} */}
          </select>
        </div>

        <div className="selectFieldJobDiv">
          <label for="job" className="inputLabel">
            직무선택 <span id="jobLimitHint">(최대 3개)</span> <Asterisk />
          </label>
          <select
            id="selectJobForm"
            background="/images/ic-sign-dropdown.svg"
            style={{
              borderColor: jobSelectErr ? "red" : "",
              color: jobSelected !== 0 ? "black" : "#c1c1c1",
            }}
            onChange={onJobChange}
          >
            {fields &&
              fields[fieldSelected] &&
              fields[fieldSelected].jobs.map((e, i) =>
                i === 0 ? (
                  <option disabled selected style={{ color: "#c1c1c1" }}>
                    {e.name}
                  </option>
                ) : (
                  <option style={{ color: "black" }}>{e.name}</option>
                )
              )}

            {/* {jobList[fieldSelected].map((element, index) =>
              index == 0 ? (
                <option disabled selected style={{ color: "#c1c1c1" }}>
                  {element.name}
                </option>
              ) : (
                <option style={{ color: "black" }}>{element.name}</option>
              )
            )} */}
          </select>
          <ErrNotice
            hint="직무는 3개까지 선택할 수 있습니다."
            flag={jobSelectErr}
          />
        </div>
      </div>

      <FieldJobSelected fieldJob={fieldJob} onRemove={onFieldJobRemove} />

      <HighlightButton
        text="가입하기!"
        backgroundColor={
          fieldJob.length > 0 ? colors.mainyellowa : colors.darkgray
        }
        color={colors.white}
        onClick={onRegisterClick}
      />
    </div>
  );
}

export default SignUpInfo;
