import React, { useEffect, useState } from "react";
import "./coverletterPage.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../common/Header";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements, atomMenu } from "../recoil/userStore";
import config from "../configs";
import produce from "immer";
import { getCoverletters } from "../apis/coverletters";

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

    const response = await getCoverletters();

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
        cl_id: response.cl_id,
        element: fromServerCle,
        selectedElement: 0,
      }));
    }
  }, []);

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

  function handleClickDeleteButton() {
    if (cle.element.length === 1)
      alert("자기소개서 문항/답변은 1개 이상이어야 합니다!");
    else {
      deleteCleServer(cle.selectedElement + 1);
      deleteCleLocal(cle.selectedElement);
    }
  }

  function deleteCleServer(index) {
    fetch(`${config.url}/api/cls`, {
      method: "DELETE",
      credentials: "include",
      body: new URLSearchParams({
        cl_element_id: index,
      }),
    });
  }

  function deleteCleLocal(index) {
    const afterDelete = cle.element.filter((e, idx, arr) => idx != index);

    if (cle.selectedElement !== 0) {
      setCle((prev) => ({
        ...prev,
        element: afterDelete,
        selectedElement: index - 1,
      }));
    } else {
      setCle({
        ...cle,
        selectedElement: 1,
      });
      setCle({
        ...cle,
        element: afterDelete,
        selectedElement: 0,
      });
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
            onClickDeleteButton={handleClickDeleteButton}
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
