function SegmentCard(props) {
  const { image_source, image_desc, title, text } = props;
  return (
    <div className="segmentCard">
      <img className="icon" src={image_source} alt={image_desc} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default SegmentCard;
