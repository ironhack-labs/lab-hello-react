function Item({ image, title, text }) {
    return (
      <div className="item">
        <img src={image} alt="icon1" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Item;