import "../../style/iconTextButton.scss";

function ScrapButton(props) {
  const { onClick, onMouseOver, onMouseOut, status } = { ...props };

  return (
    <span
      className="iconTextButton"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img
        className="icScrap"
        src={
          status === "default"
            ? "/images/ic-mydocs-scrap.svg"
            : "/images/ic-mydocs-scrap-clicked.svg"
        }
      />
      <span className={status === "default" ? "" : "focusedText"}>
        모아두기
      </span>
    </span>
  );
}

export default ScrapButton;
