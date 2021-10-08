import React from "react";
import Header from "../components/Header";
import "./myPage.scss";

function MyPage() {
  return (
    <div>
      <Header />
      <div className="myPageWrapperParent">
        <div className="myPageWrapper">
          <div className="myPageHeader">
            <p id="myPageTitle">마이페이지</p>
            <p id="myPageExplain">임시로 만들어진 마이페이지입니다!</p>
          </div>
          <div className="keywordQuestionWrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
