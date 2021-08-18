import "./clInputDiv.scss";

function ClInputDiv(props) {
  const { hint, title, onChange } = { ...props };

  return (
    <div className="clInputDivWrapper">
      <span className="clInputTitle">
        <div />
        <p>{title}</p>
      </span>
      <input className="clInputAnswer" placeholder={hint} onChange={onChange} />
    </div>
  );
}

export default ClInputDiv;
