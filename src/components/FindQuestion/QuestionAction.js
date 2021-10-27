import { useState } from "react";
import LikeButton from "../atom/LikeButton";
import DislikeButton from "../atom/DislikeButton";
import ScrapButton from "../atom/ScrapButton";
import EditButton from "../atom/EditButton";
import "./questionAction.scss";

function QuestionAction(props) {
  const { actions, onLikeClick, onDislikeClick, onScrapClick, onEditClick } = {
    ...props,
  };

  const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
  const [isThumbsDownHovered, setIsThumbsDownHovered] = useState(false);
  const [isScrapHovered, setIsScrapHovered] = useState(false);

  return (
    <div className="respondFindQuestion">
      <span className="evaluateQuestion noselect">
        <LikeButton
          onClick={onLikeClick}
          onMouseOver={() => setIsThumbsUpHovered(true)}
          onMouseOut={() => setIsThumbsUpHovered(false)}
          status={
            actions.liked ? "active" : isThumbsUpHovered ? "active" : "default"
          }
        />
        <DislikeButton
          onClick={onDislikeClick}
          onMouseOver={() => setIsThumbsDownHovered(true)}
          onMouseOut={() => setIsThumbsDownHovered(false)}
          status={
            actions.disliked
              ? "active"
              : isThumbsDownHovered
              ? "active"
              : "default"
          }
        />
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

export default QuestionAction;
