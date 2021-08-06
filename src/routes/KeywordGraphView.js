import React from "react";
import "../style/keywordGraphView.scss";
import colors from "../style/colors.js";
import HighlightText from "../components/HighlightText";
import ItemCircle from "../components/ItemCircle";
import ShadowBox from "../components/ShadowBox";
import Keyword from "../components/Keyword";

function KeywordGraphView() {
  const keywordArr = [
    {
      parentKeyword: "디자인",
      childKeywords: [
        {
          name: "UI/UX",
          answerExist: "y",
        },
        {
          name: "편집디자인",
          answerExist: "n",
        },
        {
          name: "브랜딩",
          answerExist: "x",
        },
        {
          name: "웹디자인",
          answerExist: "n",
        },
        {
          name: "편집디자인",
          answerExist: "y",
        },
        {
          name: "브랜딩",
          answerExist: "y",
        },
      ],
    },
    {
      parentKeyword: "디자인22",
      childKeywords: [
        {
          name: "UI/UX",
          answerExist: "y",
        },
        {
          name: "편집디자인",
          answerExist: "n",
        },
        {
          name: "브랜딩",
          answerExist: "x",
        },
        {
          name: "웹디자인",
          answerExist: "n",
        },
        {
          name: "편집디자인",
          answerExist: "y",
        },
        {
          name: "브랜딩",
          answerExist: "y",
        },
      ],
    },
  ];

  function pickColor(answerExist) {
    if (answerExist === "y") return `${colors.mainyellow}`;
    else if (answerExist === "n") return `${colors.subyellow}`;
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

        {keywordArr.map((element) => (
          <ShadowBox
            width="52.8rem"
            aOfRgba="0.05"
            flexDirection="column"
            padding="4.2rem"
            radius="1.6rem"
          >
            <HighlightText
              text={element.parentKeyword}
              marginBottom="0"
              color={colors.mainyellowa}
            />

            <div className="keywordParent">
              {element.childKeywords.map((e) => (
                <Keyword text={e.name} color={pickColor(e.answerExist)} />
              ))}
            </div>
          </ShadowBox>
        ))}
      </div>
    </div>
  );
}

export default KeywordGraphView;
