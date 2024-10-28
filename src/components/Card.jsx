export const Card = ({ text, imgLink, heading }) => {
  return (
    <div className="card">
      <img src={imgLink} />
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};
