import "./BottomSection.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const BottomSection = () => {
  return (
    <div className="BottomSection">
      <div className="item">
        <img src={icon1} />
        <h5>Declarative</h5>
        <p>React make it painless to create interactive UIs</p>
      </div>
      <div className="item">
        <img src={icon2} />
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="item">
        <img src={icon3} />
        <h5>Single-Way</h5>
        <p>A set of immutable values are passed to the component`s</p>
      </div>
      <div className="item">
        <img src={icon4} />
        <h5>JSX</h5>
        <p>Static-typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};
export default BottomSection;
