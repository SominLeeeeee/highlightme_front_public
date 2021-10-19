import "./modal.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignOut from "../common/SignOut";

const Modal = () => {
  const history = useHistory();
  const [logout, setLogOut] = useState(false);

  const cleOnClick = () => {
    history.push("/coverletter");
  };

  const logoutOnClick = () => {
    setLogOut(!logout);
  };

  return (
    <div className="modalWrapper">
      <p className="modalContent" onClick={cleOnClick}>
        자기소개서 수정
      </p>
      <p className="modalContent" onClick={logoutOnClick}>
        로그아웃
      </p>
      {logout ? <SignOut /> : <></>}
    </div>
  );
};

export default Modal;
