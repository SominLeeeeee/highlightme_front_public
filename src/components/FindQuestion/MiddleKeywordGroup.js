import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import Keyword from "../atom/Keyword";
import colors from "../../style/colors";
import "./middleKeywordGroup.scss";
import { useEffect } from "react";

function MiddleKeywordGroup(props) {
  const { largeGroupName, middleGroupName, keywords, onKeywordClick } = {
    ...props,
  };

  function handleKeywordClick(idx) {
    onKeywordClick(idx, largeGroupName, middleGroupName);
  }

  function pickColor(answered) {
    // console.log(answered);
    if (answered === 2) return `${colors.mainyellow}`;
    else if (answered === 1) return `${colors.subyellow}`;
    else return `${colors.gray}`;
  }

  return (
    <ShadowBoxMedium padding="3.2rem" marginBottom="2rem">
      {middleGroupName ? (
        <HighlightText
          color="#ffbb00"
          text={middleGroupName}
          marginBottom="1.5rem"
          fontSize="2.4rem"
          marginBottom="0rem"
          marginTop="-1rem"
        />
      ) : (
        <></>
      )}
      {keywords ? (
        <div className="keywordWrapper">
          {keywords.map((e) => (
            <div>
              <Keyword
                color={pickColor(e.answered)}
                text={e.keyword}
                onClick={() => handleKeywordClick(e.id)}
              />
              {/* <p>{console.log(e)}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </ShadowBoxMedium>
  );
}

export default MiddleKeywordGroup;
