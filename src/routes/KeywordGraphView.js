import React from "react";
import "../style/keywordGraphView.scss";
import colors from "../style/colors.js";
import HighlightText from "../components/HighlightText";
import ItemCircle from "../components/ItemCircle";
import ShadowBox from "../components/ShadowBox";
import Keyword from "../components/Keyword";

function KeywordGraphView() {
  return (
    <div className="parentForCenter">
      <div className="parent">
        <HighlightText text="키워드 리스트" marginBottom="-5px" />
        <span className="itemCircleSpan">
          <ItemCircle
            text="답변 단 키워드"
            color={colors.mainyellow}
            marginLeft="-5px"
          />
          <ItemCircle
            text="답변 안 단 키워드"
            color={colors.subyellow}
            marginLeft="-7px"
          />
          <ItemCircle
            text="읽지 않은 키워드"
            color={colors.gray}
            marginLeft="-6px"
          />
        </span>
        <ShadowBox
          width="264px"
          aOfRgba="0.05"
          flexDirection="column"
          padding="16px 21px 21px 21px"
          radius="8px"
        >
          <HighlightText
            text="디자인"
            marginBottom="0"
            color={colors.mainyellowa}
          />
          <div className="keywordParent">
            <Keyword text="브랜딩" color={colors.gray} />
            <Keyword text="편집디자인" color={colors.mainyellow} />
            <Keyword text="편집디자인" color={colors.subyellow} />
            <Keyword text="브랜딩" color={colors.gray} />
            <Keyword text="편집디자인" color={colors.subyellow} />
          </div>
        </ShadowBox>
      </div>
    </div>
  );
}

export default KeywordGraphView;
