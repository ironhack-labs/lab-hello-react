function CardTemplate({ img, title, text }) {
    const cardStyle = {
        width: "12rem",
        border: "none",
        marginRight: "6rem",
        marginTop: "5rem"
      };
    
      const imageStyle = {
        objectFit: "cover",
        maxHeight: "200px",
      };
  
    return (
    <div className="card" style={cardStyle}>
      <img src={img} className="card-img-top" alt="fail" style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardTemplate;