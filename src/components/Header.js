import "./header.scss";
import React from "react";

function Header() {
  return (
    <div id="headerWrapper">
      <div id="header">
        <img src="/images/ic-sign-logo.svg" />
        <ul id="headerNavigators">
          <li>
            <a>질문찾기</a>
          </li>
          <li>
            <a>모아보기</a>
          </li>
          <li>
            <a>주고받기</a>
          </li>
          <li>
            <img id="myProfile" src="/images/ic-profile.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
