import "../../style/iconTextButton.scss";
import "../../index.css";

function AddInterviewButton(props) {
  const { onClick, status } = { ...props };

  return (
    <span className="iconTextButton noselect" onClick={onClick}>
      <img
        className="icAddInterview"
        src={
          status === "default"
            ? "/images/ic-interview-add.svg"
            : "/images/ic-interview-add-clicked.svg"
        }
      />
      <span className={status === "default" ? "" : "focusedText"}>
        면접 추가
      </span>
    </span>
  );
}

export default AddInterviewButton;
