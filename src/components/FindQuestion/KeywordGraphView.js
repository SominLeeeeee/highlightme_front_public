import React, { useEffect, useState } from "react";
import "./keywordGraphView.scss";
import "./questionsList.scss";
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
  const [keyword, setKeyword] = useRecoilState(atomKeyword);

  useEffect(async () => {
    let res;

    try {
      res = await fetch(`${config.URL}/api/keywords`, {
        method: "GET",
        credentials: "include",
      });

      res = await res.json();

      setKeyword((prev) =>
        produce(prev, (draft) => {
          draft.userKeywords = res.result;
          return draft;
        })
      );
    } catch (e) {
      console.log("could not fetch😭");
    }
  }, []);

  function pickColor(answered) {
    if (answered === 2) return `${colors.mainyellow}`;
    else if (answered === 1) return `${colors.subyellow}`;
    else return `${colors.gray}`;
  }

  const keywordOnClick = (index) => {
    setKeyword((prev) =>
      produce(prev, (draft) => {
        draft.selected = index;
        draft.userKeywords[index].answered = 1;

        return draft;
      })
    );
  };

  const userKeywordExist = () => {
    return keyword && keyword.userKeywords && keyword.userKeywords.length > 0;
  };

  return (
    <div className="parentForCenter">
      <div className="parent">
        <HighlightText text="키워드 리스트" marginBottom="0" />
        <span className="itemCircleSpan">
          <ItemCircle text="답변한 키워드" color={colors.mainyellow} />
          <ItemCircle text="답변하지 않은 키워드" color={colors.subyellow} />
          <ItemCircle text="읽지 않은 키워드" color={colors.gray} />
        </span>

        <ShadowBoxMedium>
          {userKeywordExist() ? (
            <div id="keywordWrapper">
              {keyword.userKeywords.map((e, idx, arr) => (
                <Keyword
                  text={e.keyword}
                  color={pickColor(e.answered)}
                  onClick={() => keywordOnClick(idx)}
                />
              ))}
            </div>
          ) : (
            <div className="keywordNull">
              <p className="keywordClick">키워드가 없네요 🥲</p>
            </div>
          )}
        </ShadowBoxMedium>
      </div>
    </div>
  );
}

export default KeywordGraphView;
