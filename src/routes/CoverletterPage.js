import React, { useEffect, useState } from "react";
import "./coverletterPage.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../common/Header";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements, atomMenu } from "../recoil/userStore";
import config from "../configs";
import produce from "immer";

function CoverletterPage() {
  const [menu, setMenu] = useRecoilState(atomMenu);
  const [cle, setCle] = useRecoilState(atomCoverLetterElements);

  const [emptyErr, setEmptyErr] = useState(false);
  const [countErr, setCountErr] = useState(false);

  /**
   * 자소서 등록 페이지 처음 접속 시
   * 서버에서 자기소개서 받아오기
   */
  useEffect(async () => {
    setMenu("자기소개서");

    const response = await downloadCle();

    if (response) {
      let fromServerCle = [];
      response.cles.map((element) => {
        fromServerCle = fromServerCle.concat({
          problem: element.problem,
          answer: element.answer,
        });
      });

      setCle((prev) => ({
        ...prev,
        element: fromServerCle,
        selectedElement: 0,
      }));
    }
  }, []);

  async function downloadCle() {
    let result;

    result = await fetch(`${config.url}/api/cls`, {
      method: "GET",
      credentials: "include",
    });

    if (result.ok) {
      result = await result.json();
      console.log(result);
      setCle((prev) => ({ ...prev, cl_id: result.cl_id }));
      return result;
    } else return result.ok;
  }

  async function uploadCle() {
    let CLES = [];
    cle.element.map((e, idx, arr) => {
      CLES.push({
        cl_element_id: idx + 1,
        problem: e.problem,
        answer: e.answer,
        _public: 1,
      });
    });

    let request = {
      CLES: [],
      cl_id: cle.cl_id,
      title: `자기소개서 ${cle.cl_id}번`,
      company: "카뱅",
      tags: ["카카오", "뱅크"],
      comments: "잘부탁드려용",
    };

    request = new URLSearchParams(request);
    request.set("CLES", JSON.stringify(CLES));

    let result = await fetch(`${config.url}/api/cls`, {
      method: "POST",
      credentials: "include",
      body: request,
    });

    if (!result.ok) console.log("failed to upload coverletter 😭");
  }

  /**
   * 문항을 작성할 때
   */
  function handleChangeProblem(event) {
    setCle((prev) =>
      produce(prev, (draft) => {
        draft.element[draft.selectedElement].problem = event.target.value;
        return draft;
      })
    );
  }

  /**
   * 답변을 작성할 때
   */
  function handleChangeAnswer(event) {
    setCle((prev) =>
      produce(prev, (draft) => {
        draft.element[draft.selectedElement].answer = event.target.value;
        return draft;
      })
    );
  }

  /**
   * 추가하기 버튼 눌렀을 때
   */
  function handleClickPlusButton() {
    setCle((prev) =>
      produce(prev, (draft) => {
        draft.element.push({
          problem: "",
          answer: "",
        });
        return draft;
      })
    );
  }

  function getTitleFromCle() {
    let res = [];

    cle.element.map((e) => {
      res = res.concat(e.problem);
    });

    return res;
  }

  function checkAbnormal() {
    let result = false;

    cle.element.map((e, idx, arr) => {
      if (e.problem === "") result = { res: true, index: idx, err: "empty" };
      else if (e.answer.length < 200)
        result = { res: true, index: idx, err: "count" };
    });

    return result;
  }

  function handleClickSaveButton() {
    const abnormal = checkAbnormal();

    if (abnormal.res) {
      setCle((prev) => ({ ...prev, selectedElement: abnormal.index }));
      setError(abnormal.err);
    } else {
      uploadCle();
    }
  }

  function setError(err) {
    switch (err) {
      case "count":
        setCountErr(true);
        setTimeout(() => setCountErr(false), 1500);
        break;
      case "empty":
        setEmptyErr(true);
        setTimeout(() => setEmptyErr(false), 1500);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header />
      <div className="coverletterWrapper">
        <div className="coverletter">
          <ClList
            cleTitle={getTitleFromCle()}
            selectedIndex={cle.selectedElement}
            onClickPlusButton={handleClickPlusButton}
          />
          <ClInput
            onChangeProblem={handleChangeProblem}
            onChangeAnswer={handleChangeAnswer}
            onClickSaveButton={handleClickSaveButton}
            countErr={countErr}
            emptyErr={emptyErr}
            problem={cle.element[cle.selectedElement].problem}
            answer={cle.element[cle.selectedElement].answer}
          />
        </div>
      </div>
    </div>
  );
}

export default CoverletterPage;
