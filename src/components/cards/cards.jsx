function Cards({ URLimg, title, text }) {
  return (
      <div className="cards m-2" style={{ width:'14rem' }}>
        <img className="card-img-top" src={URLimg} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
  );
}

export default Cards;
