import "./Feature.css";

const Feature = (props) => {
  return (
    <div className="Feature">
      <div className="FeatureImage">
        <img src={props.img} alt="icon" />
      </div>
      <p className="FeatureName">{props.name}</p>
      <p className="FeatureDesc">{props.desc}</p>
    </div>
  );
};

export default Feature;
