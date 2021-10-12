import React, { useEffect, useState } from "react";
import "./keywordGraphView.scss";
import colors from "../../style/colors.js";
import HighlightText from "../atom/HighlightText";
import ItemCircle from "../atom/ItemCircle";
import Keyword from "../atom/Keyword";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import { useSelector } from "react-redux";
import config from "../../configs";
import { useRecoilState } from "recoil";
import { atomKeyword, atomUserInfo } from "../../recoil/userStore";
import produce from "immer";

function KeywordGraphView() {
  const keywordArrRedux = useSelector((state) => state.keywords);

  const [keyword, setKeyword] = useRecoilState(atomKeyword);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  useEffect(async () => {
    let res = await fetch(`${config.URL}/api/keywords`, {
      method: "GET",
    });

    res = await res.json();

    setKeyword((prev) =>
      produce(prev, (draft) => {
        draft.userKeywords = res;
        return draft;
      })
    );
  }, []);

  function pickColor(answered) {
    if (answered === 2) return `${colors.mainyellow}`;
    else if (answered === 1) return `${colors.subyellow}`;
    else return `${colors.gray}`;
  }

  return (
    <div className="parentForCenter">
      <div className="parent">
        <HighlightText text="키워드 리스트" marginBottom="0" />
        <span className="itemCircleSpan">
          <ItemCircle text="답변한 키워드" color={colors.mainyellow} />
          <ItemCircle text="답변하지 않은 키워드" color={colors.subyellow} />
          <ItemCircle text="읽지 않은 키워드" color={colors.gray} />
        </span>

        {/* TODO 서버에서 내려받는 포맷이랑 호환이 안되는 상태임 */}
        {/* {keyword.userKeywords.result.map((element) => (
          <ShadowBoxMedium paddingTop="3.1rem">
            <HighlightText
              text={element.parentKeyword}
              marginBottom="0"
              color={colors.mainyellowa}
            /> */}

        <div className="keywordParent">
          {keyword.userKeywords.map((e) => (
            <Keyword text={e.keyword} color={pickColor(e.answered)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeywordGraphView;
