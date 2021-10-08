import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import "./myPage.scss";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";
import { isUserValid } from "../utils";

function MyPage() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  useEffect(() => {
    if (!isUserValid(userInfo)) {
      history.push("/signup");
    }
  }, []);

  const onSignOutClick = () => {
    history.push("/signout");
  };

  return (
    <div>
      <Header />
      <div className="myPageWrapperParent">
        <div className="myPageWrapper">
          <div className="myPageHeader">
            <p id="myPageTitle">마이페이지</p>
            <p id="myPageExplain">임시로 만들어진 마이페이지입니다!</p>
          </div>
          <div className="keywordQuestionWrapper">
            <button onClick={onSignOutClick}>로그아웃</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
