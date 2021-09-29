import React, { useState } from "react";
import "./clInput.scss";
import config from "../configs";
import ClTip from "./molcule/ClTip";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../recoil/userStore";
import InputTitle from "./atom/InputTitle";
import InputBox from "./atom/InputBox";

function ClInput() {
  const [count, setCount] = useState(0);
  const [deleteHover, setDeleteHover] = useState(false);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState("");

  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  const onInputChangeProblem = (event) => {
    setProblem(event.target.value);
  };

  const onInputChangeAnswer = (event) => {
    setCount(event.target.value.length);
    setAnswer(event.target.value);
  };

  const onSaveButtonClicked = async () => {
    if (count < 200)
      document.getElementById("errNotice").style.display = "inline-block";
    else {
      document.getElementById("errNotice").style.display = "none";

      //Upload
      const result = await fetch(`${config.URL}/api/cls`, {
        method: "POST",
        body: new URLSearchParams({
          user_id: 2,
          problem: problem,
          answer: answer,
          _public: 1,
        }),
      });

      console.log(result);
    }
  };

  const onDeleteButtonMouseOver = () => {
    setDeleteHover(!deleteHover);
  };

  function deleteButtonOnClick() {
    const temp = coverLetterElements.element.filter(
      (e, index, array) => index != coverLetterElements.selectedElement
    );

    setCoverLetterElements((prev) => ({
      ...prev,
      element: temp,
    }));
  }

  return (
    <div className="clInputWrapper">
      <ClTip />
      <InputTitle>자기소개서 문항 입력</InputTitle>
      <InputBox
        onChange={onInputChangeProblem}
        minRows="1"
        maxRows="2"
        placeholder="ex) 본인의 특성 및 성격의 장단점을 자유롭게 기술해주세요."
        padding="1.6rem"
        radius="0.8rem"
        marginBottom="3.4rem"
      />
      <InputTitle>자기소개서 문항 입력</InputTitle>
      <InputBox
        onChange={onInputChangeAnswer}
        minRows="4"
        maxRows="7"
        placeholder="ex) 저의 장점은 근면성실하다는 것입니다."
        padding="1.6rem"
        radius="0.8rem"
      />

      <div className="clInputNotice">
        <div>
          <p id="errNotice">답변을 200자 이상 입력해주세요.</p>
        </div>
        <p className="typingCount">({count} / 5000자)</p>
      </div>

      <div className="clInputButtons">
        <div
          className="clInputDeleteButton noselect"
          onMouseOver={onDeleteButtonMouseOver}
          onMouseOut={onDeleteButtonMouseOver}
          onClick={deleteButtonOnClick}
        >
          <img
            src={
              deleteHover
                ? "/images/ic-mydocs-trash-clicked.svg"
                : "/images/ic-mydocs-trash.svg"
            }
          />
          <p style={deleteHover ? { color: "#ff0000" } : { color: "#838383" }}>
            삭제
          </p>
        </div>
        <button
          className="clInputSaveButton"
          onClick={onSaveButtonClicked}
          style={
            count > 0
              ? { backgroundColor: "#febb2d" }
              : { backgroundColor: "#eaeaea" }
          }
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ClInput;
