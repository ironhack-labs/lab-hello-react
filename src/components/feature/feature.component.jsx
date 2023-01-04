import "./feature.style.scss";

export default function Feature(props) {
  const { src, title, text } = props;
  return (
    <div className="feature">
      <img src={src} alt="" width={128} height={128} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
