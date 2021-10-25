import { useState } from "react";
import LikeButton from "../atom/LikeButton";
import DislikeButton from "../atom/DislikeButton";
import ScrapButton from "../atom/ScrapButton";
import EditButton from "../atom/EditButton";
import "./respondFindQuestion.scss";

function RespondFindQuestion(props) {
  const { question, onLikeClick, onDislikeClick, onScrapClick, onEditClick } = {
    ...props,
  };

  const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
  const [isThumbsDownHovered, setIsThumbsDownHovered] = useState(false);
  const [isScrapHovered, setIsScrapHovered] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  function handleEditClick() {
    onEditClick(!isEditClicked);
    setIsEditClicked(!isEditClicked);
  }

  return (
    <div className="respondFindQuestion">
      <span className="evaluateQuestion noselect">
        <LikeButton
          onClick={onLikeClick}
          onMouseOver={() => setIsThumbsUpHovered(true)}
          onMouseOut={() => setIsThumbsUpHovered(false)}
          status={
            question.liked ? "active" : isThumbsUpHovered ? "active" : "default"
          }
        />
        <DislikeButton
          onClick={onDislikeClick}
          onMouseOver={() => setIsThumbsDownHovered(true)}
          onMouseOut={() => setIsThumbsDownHovered(false)}
          status={
            question.disliked
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
            question.scraped ? "active" : isScrapHovered ? "active" : "default"
          }
        />
      </span>

      <EditButton
        onClick={handleEditClick}
        status={isEditClicked ? "active" : "default"}
      />
    </div>
  );
}

export default RespondFindQuestion;
