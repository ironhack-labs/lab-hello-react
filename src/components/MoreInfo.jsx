function MoreInfo(props) {
  return (
    <div className="info text-start">
      <img src={props.imageIcon} alt="" className="icons" />
      <h4 className="fw-bold">{props.header}</h4>
      <p className="text-muted">
        <small>{props.text}</small>
      </p>
    </div>
  );
}

export default MoreInfo;
