function CardsItem({image, title, text, ...props}){
    return (
      <div>
        <p>{image}</p>
        <p>
          <h2>{title}</h2>
        </p>
        <p>{text}</p>
      </div>
    );
}

export default CardsItem;