import "./inputTitle.scss";

export default function InputTitle(props) {
  const { color, children } = { ...props };

  return (
    <span className="inputTitle" style={{ color: color, borderColor: color }}>
      {children}
    </span>
  );
}
