import React, { useEffect, useState } from "react";
import "./clInput.scss";
import config from "../../configs";
import ClTip from "../molcule/ClTip";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import InputTitle from "../atom/InputTitle";
import InputBox from "../atom/InputBox";
import ErrNotice from "../atom/ErrNotice";
import produce from "immer";

function ClInput() {
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  const [deleteHover, setDeleteHover] = useState(false);
  const [countErr, setCountErr] = useState(false);

  const [problem, setProblem] = useState(coverLetterElements.element.problem);
  const [answer, setAnswer] = useState(coverLetterElements.element.answer);
  const [curr, setCurr] = useState(coverLetterElements.selectedElement);

  /* 문항을 쓸 때마다 recoil에 반영 */
  useEffect(() => {
    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element[curr].problem = problem;
        return draft;
      })
    );

    console.log(problem);
  }, [problem]);

  /* 답변을 쓸 때마다 recoil에 반영 */
  useEffect(() => {
    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element[curr].answer = answer;
        return draft;
      })
    );
  }, [answer]);

  /* 다른 문항을 선택 시 problem과 answer 수정 */
  useEffect(() => {
    setCurr(coverLetterElements.selectedElement);
    const curr = coverLetterElements.selectedElement;
    const tempProblem = coverLetterElements.element[curr].problem;
    const tempAnswer = coverLetterElements.element[curr].answer;

    // if (tempProblem == null) setProblem("");
    setProblem(coverLetterElements.element[curr].problem);

    // if (tempAnswer == null) setAnswer("");
    setAnswer(coverLetterElements.element[curr].answer);
  }, [coverLetterElements.selectedElement]);

  /* 자소서 등록 페이지 들어올 시 서버에서 자소서 정보 받아오기 */
  useEffect(() => {
    fetch(`${config.URL}/api/cls`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.isNew === 0) {
          localStorage.setItem("coverletter_id", res.result[0].cl_id);
          setCoverLetterElements((prev) => ({
            ...prev,
            element: [],
          }));

          res.result.map((e, idx, arr) => {
            setCoverLetterElements((prev) =>
              produce(prev, (draft) => {
                draft.element.push({ problem: e.problem, answer: e.answer });
                return draft;
              })
            );
          });
        }

        console.log(res.result);
      });

    setProblem(coverLetterElements.element[0].problem);
    setAnswer(coverLetterElements.element[0].answer);
  }, []);

  const onInputChangeProblem = (event) => {
    setProblem(event.target.value);
  };

  const onInputChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const onSaveButtonClicked = async () => {
    if (answer.length > 200) {
      //Upload
      const request = {
        CLES: [
          coverLetterElements.element.map((e, idx, arr) => ({
            cl_element_id: idx + 1,
            problem: e.problem,
            answer: e.answer,
            _public: 1,
          })),
        ],
        cl_id: localStorage.getItem("coverletter_id"),
        title: `${localStorage.getItem("user_id")}의 자기소개서`,
        company: "카뱅",
        tags: ["카카오", "뱅크"],
        comments: "잘부탁드려용",
      };

      const result = await fetch(`${config.URL}/api/cls`, {
        method: "POST",
        body: JSON.stringify(request),
      });
    } else {
      setCountErr(true);
      setTimeout(() => setCountErr(false), 1500);
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
        id="problemInput"
        onChange={onInputChangeProblem}
        minRows="1"
        maxRows="2"
        placeholder="ex) 본인의 장단점에 대해 얘기해주세요."
        borderColor={countErr ? "red" : ""}
        value={problem}
      >
        {problem}
      </InputBox>
      <InputTitle>자기소개서 답변 입력</InputTitle>
      <InputBox
        id="answerInput"
        onChange={onInputChangeAnswer}
        minRows="4"
        maxRows="7"
        placeholder="ex) 저의 장점은 근면성실하다는 것입니다."
        borderColor={countErr ? "red" : ""}
        value={answer}
      >
        {answer}
      </InputBox>

      <div className="clInputNotice">
        <ErrNotice hint="답변을 200자 이상 입력해주세요." flag={countErr} />
        <div />
        <p className="typingCount">
          ({answer == null ? 0 : answer.length} / 5000자)
        </p>
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
            answer !== null && problem !== null
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
