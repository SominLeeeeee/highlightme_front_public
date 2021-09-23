import React from "react";
import "../style/keywordGraphView.scss";
import colors from "../style/colors.js";
import HighlightText from "../components/HighlightText";
import ItemCircle from "../components/ItemCircle";
import Keyword from "../components/Keyword";
import ShadowBoxMedium from "../components/ShadowBoxMedium";
import { useSelector } from "react-redux";
import config from "../configs";
import { useRecoilState } from "recoil";
import { atomKeyword, atomUserInfo } from "../recoil/userStore";
import produce from "immer";

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

  const keywordArrRedux = useSelector((state) => state.keywords);

  const [keyword, setKeyword] = useRecoilState(atomKeyword);
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  fetch(`${config.URL}/api/keywords?user_id=${userInfo.id}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res", res);
      setKeyword((prev) =>
        produce(prev, (draft) => {
          draft.userKeywords = res;
          return draft;
        })
      );
    });
  console.log("keyword", keyword);

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
        {keyword.map((element) => (
          <ShadowBoxMedium paddingTop="3.1rem">
            <HighlightText
              text={element.parentKeyword}
              marginBottom="0"
              color={colors.mainyellowa}
            />

            <div className="keywordParent">
              {element.map((e) => (
                <Keyword text={e.keyword} color={pickColor(e.answerExist)} />
              ))}
            </div>
          </ShadowBoxMedium>
        ))}
      </div>
    </div>
  );
}

export default KeywordGraphView;
