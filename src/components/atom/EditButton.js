import "../../style/iconTextButton.scss";
import "../../index.css";

function EditButton(props) {
  const { onClick, status } = { ...props };

  return (
    <span
      className="iconTextButton noselect"
      onClick={onClick}
      style={{ marginRight: "-2rem" }}
    >
      <img
        className="icEdit"
        src={
          status === "default"
            ? "/images/ic-mydocs-g-write.svg"
            : "/images/ic-mydocs-g-write-clicked.svg"
        }
      />
      {status === "default" ? (
        <span>수정</span>
      ) : (
        <span className="focusedText">수정완료</span>
      )}
    </span>
  );
}

export default EditButton;
