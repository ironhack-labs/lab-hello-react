function FeatureComponent({ img, title, description }) {
  return (
    <>
      <div>
        <img src={img} alt="Feature" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default FeatureComponent;
