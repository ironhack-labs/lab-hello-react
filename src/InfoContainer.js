import info from "./images/toolsimage.png";
import info2 from "./images/toolsimage2.png";
import info3 from "./images/toolsimage3.png";
import info4 from "./images/toolsimage4.png";

function InfoContainer() {
  return (
    <div className="InfoContainer">
      <div className="firsticon">
        <img src={info} alt="info" srcset="" />
        <h4> Declarative</h4>
        <p>React makes it</p>
        <p> painless to create</p>
        <p>interactive UIs.</p>
      </div>
      <div className="secondticon">
        <img src={info2} alt="info" srcset="" />
        <h4> Components</h4>
        <p>Build encalpsulated</p>
        <p> components that</p>
        <p> manage their state.</p>
      </div>
      <div className="thirdicon">
        <img src={info3} alt="info" srcset="" />
        <h4> Single-Way</h4>
        <p>A set of immutable </p> <p> values are passed to</p>{" "}
        <p> the components.</p>
      </div>
      <div className="forthicon">
        <img src={info4} alt="info" srcset="" />
        <h4> JSX</h4>
        <p>Statically typed </p> <p> design to run on </p>{" "}
        <p> modern browsers.</p>
      </div>
    </div>
  );
}

export default InfoContainer;
