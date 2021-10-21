import React from "react";
import ClElementTitle from "../molcule/ClElementTitle";
import "./clList.scss";
import "../../index.css";

function ClList(props) {
  const { cleTitle, onClickPlusButton } = { ...props };

  return (
    <div className="clListWrapper ">
      <div className="clListHeader">
        <p className="clListTitle noselect">자기소개서 등록</p>
        <div className="clElementPlus noselect" onClick={onClickPlusButton}>
          <img src="/images/ic-mydocs-plus.svg" />
          <p>추가하기</p>
        </div>
      </div>
      <div>
        {cleTitle.map((problem, index) => (
          <ClElementTitle
            number={index + 1}
            problem={problem ? problem : "자기소개서 문항을 입력해주세요"}
          />
        ))}
      </div>
    </div>
  );
}

export default ClList;
