import "./modal.scss";
import React from "react";
import { useHistory } from "react-router-dom";

const Modal = () => {
  const history = useHistory();

  const cleOnClick = () => {
    history.push("/coverletter");
  };

  const logoutOnClick = () => {
    history.push("/signout");
  };

  return (
    <div className="modalWrapper">
      <p className="modalContent" onClick={cleOnClick}>
        자기소개서 수정
      </p>
      <p className="modalContent" onClick={logoutOnClick}>
        로그아웃
      </p>
    </div>
  );
};

export default Modal;
