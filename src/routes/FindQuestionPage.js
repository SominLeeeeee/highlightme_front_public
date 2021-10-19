import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import KeywordGraphView from "../components/FindQuestion/KeywordGraphView";
import QuestionList from "../components/FindQuestion/QuestionsList";
import Header from "../common/Header";
import "./findQuestionPage.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomSignUp, atomUserInfo, atomMenu } from "../recoil/userStore";
import { isUserValid } from "../utils";

function FindQuestionPage() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [menu, setMenu] = useRecoilState(atomMenu);

  useEffect(() => {
    if (!isUserValid(userInfo)) {
      history.push("/signup");
    }

    setMenu("질문찾기");
  }, []);

  return (
    <div>
      <Header />
      <div className="findQuestionWrapperParent">
        <div className="findQuestionWrapper">
          <div className="findQuestionHeader">
            <p id="findQuestionTitle">질문찾기</p>
            <p id="findQuestionExplain">
              자기소개서와 연관된 <b>면접 예상 질문</b>을 파악하고, 실제 면접을
              준비해보세요!
            </p>
          </div>
          <div className="keywordQuestionWrapper">
            <KeywordGraphView />
            <QuestionList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindQuestionPage;
