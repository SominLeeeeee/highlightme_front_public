import "../../style/iconTextButton.scss";

function LikeButton(props) {
  const { onClick, onMouseOver, onMouseOut, status } = { ...props };

  return (
    <span
      className="iconTextButton"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img
        className="icGood"
        src={
          status === "default"
            ? "/images/ic-mydocs-good.svg"
            : "/images/ic-mydocs-good-clicked.svg"
        }
      />
      <span className={status === "default" ? "" : "focusedText"}>좋아요</span>
    </span>
  );
}

export default LikeButton;
