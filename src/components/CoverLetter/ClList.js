import React from "react";
import ClElementTitle from "../molcule/ClElementTitle";
import "./clList.scss";
import "../../index.css";
import { useRecoilState } from "recoil";
import { atomCoverLetterElements } from "../../recoil/userStore";
import produce from "immer";

function ClList(props) {
  const { cleTitle, onClickPlusButton } = { ...props };
  const [coverLetterElements, setCoverLetterElements] = useRecoilState(
    atomCoverLetterElements
  );

  function clPlusOnClick() {
    setCoverLetterElements((prev) =>
      produce(prev, (draft) => {
        draft.element.push({
          problem: "",
          answer: "",
        });
        return draft;
      })
    );
  }

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
