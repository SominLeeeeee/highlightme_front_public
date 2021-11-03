import HighlightText from "../atom/HighlightText";
import ShadowBoxMedium from "../atom/ShadowBoxMedium";
import Keyword from "../atom/Keyword";
import colors from "../../style/colors";

function MiddleKeywordGroup(props) {
  const { middleGroupName, keywords } = { ...props };

  function pickColor(answered) {
    if (answered === 2) return `${colors.mainyellow}`;
    else if (answered === 1) return `${colors.subyellow}`;
    else return `${colors.gray}`;
  }

  return (
    <ShadowBoxMedium>
      <HighlightText color="#ffbb00" text={middleGroupName} />
      {keywords ? (
        keywords.map((e) => (
          <Keyword color={pickColor(e.answered)} text={e.keyword} />
        ))
      ) : (
        <></>
      )}
    </ShadowBoxMedium>
  );
}

export default MiddleKeywordGroup;
