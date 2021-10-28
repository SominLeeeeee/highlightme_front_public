import React, { useEffect, useState } from "react";
import "./coverletterPage.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../common/Header";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements, atomMenu } from "../recoil/userStore";
import config from "../configs";
import produce from "immer";
import { getCoverletters, postCoverletters } from "../apis/coverletters";

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
    console.log(response);
    if (response) {
      if (response.elements.length) {
        setCle(response);
      }
    }
  }, []);

  /**
   * 문항을 작성할 때
   */
  function handleChangeProblem(event) {
    setCle((prev) =>
      produce(prev, (draft) => {
        draft.elements[draft.selectedElement].problem = event.target.value;
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
        draft.elements[draft.selectedElement].answer = event.target.value;
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
        draft.elements.push({
          problem: "",
          answer: "",
          public: 1,
        });
        return draft;
      })
    );
  }

  function getTitleFromCle() {
    let res = [];

    cle.elements.map((e) => {
      res = res.concat(e.problem);
    });

    return res;
  }

  function checkAbnormal() {
    let result = false;

    cle.elements.map((e, idx, arr) => {
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
      const result = postCoverletters(cle);
      if (!result) console.log("fail to upload coverletter");
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
    if (cle.elements.length === 1)
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
    const afterDelete = cle.elements.filter((e, idx, arr) => idx != index);

    if (cle.selectedElement !== 0) {
      setCle((prev) => ({
        ...prev,
        elements: afterDelete,
        selectedElement: index - 1,
      }));
    } else {
      setCle({
        ...cle,
        selectedElement: 1,
      });
      setCle({
        ...cle,
        elements: afterDelete,
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
            problem={cle.elements[cle.selectedElement].problem}
            answer={cle.elements[cle.selectedElement].answer}
          />
        </div>
      </div>
    </div>
  );
}

export default CoverletterPage;
