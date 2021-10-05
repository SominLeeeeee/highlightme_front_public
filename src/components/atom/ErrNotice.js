import "./errNotice.scss";
function ErrNotice(props) {
  const { hint, flag } = { ...props };

  /* flag가 true일 시 ErrNotice 보여짐 */
  return (
    <p
      className="errNotice noselect"
      style={{ display: flag ? "inline-block" : "none" }}
    >
      {hint}
    </p>
  );
}

export default ErrNotice;
