import React, { useEffect } from "react";
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

  /**
   * 자소서 등록 페이지 처음 접속 시
   * 서버에서 자기소개서 받아오기
   */
  useEffect(async () => {
    setMenu("자기소개서");

    let res;

    try {
      res = await fetch(`${config.URL}/api/cls`, {
        method: "GET",
        credentials: "include",
      });
      res = await res.json();
    } catch (error) {
      console.log("fail to load coverletter 😭");
      res = false;
    }

    if (res) {
      let fromServerCle = [];
      res.result.map((element) => {
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

  /**
   * 문항을 작성할 때
   */
  function handleChangeProblem(e) {
    setCle((prev) =>
      produce(prev, (draft) => {
        draft.element[draft.selectedElement].problem = e.target.value;
        return draft;
      })
    );
  }

  return (
    <div>
      <Header />
      <div className="coverletterWrapper">
        <div className="coverletter">
          <ClList />
          <ClInput onChangeProblem={handleChangeProblem} />
        </div>
      </div>
    </div>
  );
}

export default CoverletterPage;
