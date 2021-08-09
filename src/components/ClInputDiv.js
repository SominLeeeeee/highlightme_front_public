import "./clInputDiv.scss";

function ClInputDiv(props) {
  const { hint, title } = { ...props };

  return (
    <div>
      <span className="clInputTitle">
        <div />
        <p>{title}</p>
      </span>
      <input className="clInputAnswer" placeholder={hint} />
    </div>
  );
}

export default ClInputDiv;
