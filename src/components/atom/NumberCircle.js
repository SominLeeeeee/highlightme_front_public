import "./numberCircle.scss";

export default function NumberCircle(props) {
  const { color, children, size, type } = { ...props };

  return (
    <span
      className={
        type === "default" ? "numberCircleDefault" : "numberCircleActive"
      }
      style={{ color: color, width: size, height: size }}
    >
      {children}
    </span>
  );
}
