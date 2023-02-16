import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

export const Content = () => {
  return (
    <div className="content-block">
      <div className="block">
        <img src={icon1} alt="declarative-block" />
        <h1>Declarative</h1>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="block">
        <img src={icon2} alt="components-block" />
        <h1>Components</h1>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="block">
        <img src={icon3} alt="single-way-block" />
        <h1>Single-Way</h1>
        <p>A set of immutable values arepassed to the component's.</p>
      </div>
      <div className="block">
        <img src={icon4} alt="jsx-block" />
        <h1>JSX</h1>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};
