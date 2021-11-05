import MiddleKeywordGroup from "./MiddleKeywordGroup";
import "./largeKeywordGroup.scss";

function LargeKeywordGroup(props) {
  const { largeGroupName, middleGroups, onKeywordClick } = { ...props };

  return (
    <div className="largeGroupWrapper">
      <p className="largeGroupTitle">{largeGroupName}</p>
      {middleGroups && Array.isArray(middleGroups) ? (
        <MiddleKeywordGroup
          largeGroupName={largeGroupName}
          keywords={middleGroups}
          onKeywordClick={onKeywordClick}
        />
      ) : (
        Object.keys(middleGroups).map((groupName) => (
          <MiddleKeywordGroup
            largeGroupName={largeGroupName}
            middleGroupName={groupName}
            keywords={Object.values(middleGroups[groupName])}
            onKeywordClick={onKeywordClick}
          />
        ))
      )}
    </div>
  );
}

export default LargeKeywordGroup;
