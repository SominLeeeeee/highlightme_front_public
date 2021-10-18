import React, { useEffect, useState } from "react";
import "./clInput.scss";
import config from "../../configs";
import ClTip from "../molcule/ClTip";
import { useRecoilState, useResetRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import InputTitle from "../atom/InputTitle";
import InputBox from "../atom/InputBox";
import ErrNotice from "../atom/ErrNotice";
import produce from "immer";
import { useHistory } from "react-router";

function ClInput() {
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  const [deleteHover, setDeleteHover] = useState(false);
  const [countErr, setCountErr] = useState(false);
  const [emptyErr, setEmptyErr] = useState(false);

  const [problem, setProblem] = useState(
    coverLetterElements.element[0].problem
  );
  const [answer, setAnswer] = useState(coverLetterElements.element[0].answer);
  const [curr, setCurr] = useState(0);
  const [storeTime, setStoreTime] = useState();

  const history = useHistory();

  /* 자소서 등록 페이지 들어올 시 서버에서 자소서 정보 받아오기 */
  useEffect(async () => {
    let res = await fetch(`${config.URL}/api/cls`, {
      // let res = await fetch(`/api/cls`, {
      method: "GET",
      credentials: "include",
    });
    res = await res.json();
    localStorage.setItem("coverletter_id", res.cl_id);

    if (res.isNew === 0 && res.result.length !== 0) {
      setCoverLetterElements((prev) => ({
        ...prev,
        element: [],
        selectedElement: 0,
      }));

      res.result.map((e) => {
        setCoverLetterElements((prev) =>
          produce(prev, (draft) => {
            draft.element.push({ problem: e.problem, answer: e.answer });
            return draft;
          })
        );
      });

      setProblem(res.result[0].problem);
      setAnswer(res.result[0].answer);
    }
  }, []);

  /* 문항을 쓸 때마다 recoil에 반영 */
  useEffect(() => {
    memoryTime();

    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element[curr].problem = problem;
        return draft;
      })
    );
  }, [problem]);

  /* 답변을 쓸 때마다 recoil에 반영 */
  useEffect(() => {
    memoryTime();

    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element[curr].answer = answer;
        return draft;
      })
    );
  }, [answer]);

  /* 다른 문항을 선택 시 problem과 answer 수정 */
  useEffect(() => {
    changeProblemAnswer();
  }, [coverLetterElements, coverLetterElements.selectedElement]);

  const changeProblemAnswer = () => {
    setCurr(coverLetterElements.selectedElement);
    const idx = coverLetterElements.selectedElement;

    const tempProblem = coverLetterElements.element[idx].problem;
    const tempAnswer = coverLetterElements.element[idx].answer;

    if (tempProblem == null) setProblem("");
    else setProblem(coverLetterElements.element[idx].problem);

    if (tempAnswer == null) setAnswer("");
    else setAnswer(coverLetterElements.element[idx].answer);
  };

  const onInputChangeProblem = (event) => {
    setProblem(event.target.value);
  };

  const onInputChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const memoryTime = () => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();

    setStoreTime(`${month + 1}/${date} ${hour}:${minute}`);
  };

  const onSaveButtonClicked = async () => {
    const abnormal = checkAbnormal();

    if (abnormal.res === true) {
      let idx = abnormal.index;
      /* 비어있는 문항이나 답변이 있는 경우 */
      setCoverLetterElements((prev) => ({
        ...prev,
        selectedElement: idx,
      }));

      if (coverLetterElements.element[idx].answer.length < 200) {
        setCountErr(true);
        setTimeout(() => setCountErr(false), 1500);
      }

      if (coverLetterElements.element[idx].problem.length === 0) {
        setEmptyErr(true);
        setTimeout(() => setEmptyErr(false), 1500);
      }
    } else {
      /* 모든 element 값이 온전한 경우 */
      uploadCoverLetter();
      history.push("/find");
    }
  };

  const onDeleteButtonMouseOver = () => {
    setDeleteHover(!deleteHover);
  };

  function deleteButtonOnClick() {
    if (coverLetterElements.element.length === 1)
      alert("자기소개서 문항, 답변은 1개 이상이어야 합니다!");
    else {
      fetch(`${config.URL}/api/cls`, {
        method: "DELETE",
        credentials: "include",
        body: new URLSearchParams({
          cl_element_id: coverLetterElements.selectedElement + 1,
        }),
      });

      const temp = coverLetterElements.element.filter(
        (e, index, array) => index != coverLetterElements.selectedElement
      );

      if (!coverLetterElements.selectedElement) {
        setCoverLetterElements({
          ...coverLetterElements,
          element: temp,
          selectedElement: 1,
        });
        setCoverLetterElements({
          ...coverLetterElements,
          element: temp,
          selectedElement: 0,
        });
      } else {
        setCoverLetterElements((prev) => ({
          ...prev,
          element: temp,
          selectedElement: curr - 1,
        }));
      }
    }
  }

  const checkAbnormal = () => {
    var result = false;

    coverLetterElements.element.map((e, idx, arr) => {
      if (e.problem === "" || e.answer.length < 200) {
        result = { res: true, index: idx };
      }
    });

    return result;
  };

  const uploadCoverLetter = async () => {
    const request = {
      CLES: [],
      cl_id: localStorage.getItem("coverletter_id"),
      title: `${localStorage.getItem("user_id")}의 자기소개서`,
      company: "카뱅",
      tags: ["카카오", "뱅크"],
      comments: "잘부탁드려용",
    };

    coverLetterElements.element.map((e, idx, arr) => {
      request.CLES.push({
        cl_element_id: idx + 1,
        problem: e.problem,
        answer: e.answer,
        _public: 1,
      });
    });

    const data = new URLSearchParams(request);
    data.set("CLES", JSON.stringify(request.CLES));

    const result = await fetch(`${config.URL}/api/cls`, {
      // const result = await fetch(`/api/cls`, {
      method: "POST",
      credentials: "include",
      body: data,
    });
  };

  return (
    <div className="clInputWrapper">
      <ClTip />
      <div id="problemInputDiv">
        <InputTitle>자기소개서 문항 입력</InputTitle>
        <InputBox
          id="problemInput"
          onChange={onInputChangeProblem}
          minRows="1"
          maxRows="2"
          placeholder="ex) 본인의 장단점에 대해 얘기해주세요."
          borderColor={emptyErr ? "red" : ""}
          value={problem}
        />
        <ErrNotice hint="내용을 입력해주세요." flag={emptyErr} />
      </div>

      <div id="answerInputDiv">
        <InputTitle>자기소개서 답변 입력</InputTitle>
        <InputBox
          id="answerInput"
          onChange={onInputChangeAnswer}
          minRows="4"
          maxRows="7"
          placeholder="ex) 저의 장점은 근면성실하다는 것입니다."
          borderColor={countErr ? "red" : ""}
          value={answer}
        />
        <div className="clInputNotice">
          <ErrNotice hint="답변을 200자 이상 입력해주세요." flag={countErr} />
          <div />
          <p className="typingCount">
            ({answer == null ? 0 : answer.length} / 5000자)
          </p>
        </div>
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
        <div className="clInputSaveButton">
          <p>({storeTime}에 임시 저장됨)</p>
          <button
            onClick={onSaveButtonClicked}
            style={
              answer !== null && problem !== null
                ? { backgroundColor: "#febb2d" }
                : { backgroundColor: "#eaeaea" }
            }
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClInput;
