import { useState } from "react";
import ScrapButton from "../atom/ScrapButton";
import EditButton from "../atom/EditButton";
import "./scrapAction.scss";
import AddInterviewButton from "../atom/AddInterviewButton";

function ScrapAction(props) {
  const { actions, onScrapClick, onEditClick, onAddInterviewClick } = {
    ...props,
  };

  const [isScrapHovered, setIsScrapHovered] = useState(false);
  const [isAddInterviewHovered, setIsAddInterviewHovered] = useState(false);

  return (
    <div className="scrapAction">
      <span className="evaluateScrap noselect">
        <ScrapButton
          onClick={onScrapClick}
          onMouseOver={() => setIsScrapHovered(true)}
          onMouseOut={() => setIsScrapHovered(false)}
          status={
            actions.scrapped ? "active" : isScrapHovered ? "active" : "default"
          }
        />
        <AddInterviewButton
          onClick={onAddInterviewClick}
          onMouseOver={() => setIsAddInterviewHovered(true)}
          onMouseOut={() => setIsAddInterviewHovered(false)}
          status={
            actions.interviewListed
              ? "active"
              : isAddInterviewHovered
              ? "active"
              : "default"
          }
        />
      </span>

      <EditButton
        onClick={onEditClick}
        status={actions.editing ? "active" : "default"}
      />
    </div>
  );
}

export default ScrapAction;
