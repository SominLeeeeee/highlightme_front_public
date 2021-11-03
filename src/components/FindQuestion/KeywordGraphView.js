import React, { useEffect } from "react";
import "./keywordGraphView.scss";
import "./questionsList.scss";
import colors from "../../style/colors.js";
import HighlightText from "../atom/HighlightText";
import ItemCircle from "../atom/ItemCircle";
import Keyword from "../atom/Keyword";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import { useRecoilState } from "recoil";
import { atomKeyword } from "../../recoil/userStore";
import produce from "immer";
import LargeKeywordGroup from "./LargeKeywordGroup";

function KeywordGraphView(props) {
  const { largeGroup, onKeywordClick } = { ...props };
  const [keyword, setKeyword] = useRecoilState(atomKeyword);

  return (
    <div className="parentForCenter">
      <div className="parent">
        <HighlightText text="키워드 리스트" marginBottom="0" />
        <span className="itemCircleSpan">
          <ItemCircle text="답변한 키워드" color={colors.mainyellow} />
          <ItemCircle text="답변하지 않은 키워드" color={colors.subyellow} />
          <ItemCircle text="읽지 않은 키워드" color={colors.gray} />
        </span>

        {largeGroup &&
          Object.keys(largeGroup).map((e) => (
            <LargeKeywordGroup
              largeGroupName={e}
              middleGroups={largeGroup[e]}
            />
          ))}
      </div>
    </div>
  );
}

export default KeywordGraphView;
