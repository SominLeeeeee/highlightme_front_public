import "../../style/iconTextButton.scss";

function DislikeButton(props) {
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
            ? "/images/ic-mydocs-bad.svg"
            : "/images/ic-mydocs-bad-clicked.svg"
        }
      />
      <span className={status === "default" ? "" : "focusedText"}>싫어요</span>
    </span>
  );
}

export default DislikeButton;
