function Icon({ img, name, text }) {
  return (
    <div className="card mt-4 border-light" style={{ width: "9rem" }}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body mt-3">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Icon;
