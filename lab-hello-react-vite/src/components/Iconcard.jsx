function IconCard({ texthead, image, text }) {
    // const { icon, title, description } = props;
    return (
      <div className="card">
        <img src={image} alt="card-image" />
        <h4 className="card-title"> {texthead} </h4>
        <p> {text} </p>
      </div>
    );
  }
  
  export default IconCard;
  