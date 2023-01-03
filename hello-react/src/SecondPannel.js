import "./secondPannel.css";

export default function SecondPannel({ icon, title, description }) {
  return (
    <>
      <div className="containerbot">
        <img className="elementIcons" src={icon} alt="" />
        <div className="tittle"> {title}</div>
        <div className="descrip">{description}</div>
      </div>
    </>
  );
}
