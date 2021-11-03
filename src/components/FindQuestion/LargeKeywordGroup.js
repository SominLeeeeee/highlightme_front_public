import MiddleKeywordGroup from "./MiddleKeywordGroup";

function LargeKeywordGroup(props) {
  const { largeGroupName, middleGroups, onKeywordClick } = { ...props };

  return (
    <div>
      <h1>{largeGroupName}</h1>
      {middleGroups &&
        Object.keys(middleGroups).map((groupName) => (
          <MiddleKeywordGroup
            middleGroupName={groupName}
            keywords={Object.values(middleGroups[groupName])}
          />
        ))}
    </div>
  );
}

export default LargeKeywordGroup;
