import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomMenu } from "../recoil/userStore";

const menus = [
  {
    name: "질문찾기",
    route: "/find",
    underConstruction: false,
  },
  {
    name: "모아보기",
    route: "/gather",
    underConstruction: true,
  },
  {
    name: "주고받기",
    route: "/givetake",
    underConstruction: true,
  },
];

function Header() {
  const [menu, setMenu] = useRecoilState(atomMenu);

  const onUnderConstructingMenuClick = (name) => {
    alert(`${name}는 현재 열심히 준비중! 😃`);
  };

  const onMenuClick = (name) => {
    setMenu(name);
  };

  return (
    <div id="headerWrapper">
      <div id="header">
        <Link to="/">
          <img src="/images/ic-sign-logo.svg" />
        </Link>

        <ul id="headerNavigators">
          {menus.map((e) => (
            <li>
              {e.underConstruction ? (
                <Link onClick={() => onUnderConstructingMenuClick(e.name)}>
                  {e.name}
                </Link>
              ) : (
                <Link
                  to={e.route}
                  onClick={() => onMenuClick(e.name)}
                  style={menu == e.name ? { color: "#ffbb00" } : { color: "" }}
                >
                  {e.name}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Link to="/mypage">
              <img id="myProfile" src="/images/ic-profile.svg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
