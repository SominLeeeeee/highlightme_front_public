import { useState } from "react";
import ScrapButton from "../atom/ScrapButton";
import EditButton from "../atom/EditButton";
import "./scrapAction.scss";

function ScrapAction(props) {
  const { actions, onScrapClick, onEditClick } = {
    ...props,
  };

  const [isScrapHovered, setIsScrapHovered] = useState(false);

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
      </span>

      <EditButton
        onClick={onEditClick}
        status={actions.editing ? "active" : "default"}
      />
    </div>
  );
}

export default ScrapAction;
