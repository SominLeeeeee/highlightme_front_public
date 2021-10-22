import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
  const history = useHistory();

  function onHomeButtonClick() {
    history.push("/");
  }

  return (
    <div>
      <h4>존재하지 않는 페이지에요</h4>
      <br />
      <button onClick={onHomeButtonClick}>메인으로 가기</button>
    </div>
  );
}

export default NotFoundPage;
