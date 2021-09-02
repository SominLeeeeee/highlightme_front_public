import "./header.scss";
import React from "react";

function Header() {
  return (
    <div id="headerWrapper">
      <img src="/images/ic-sign-logo.svg" />
      <p>질문찾기</p>
      <p>모아보기</p>
      <p>주고받기</p>
      <img src="/images/ic-profile.svg" />
    </div>
  );
}

export default Header;
