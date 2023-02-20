import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Content() {
  return (
    <div className="feature-collection">
      <div className="feature">
        <h3>Declarative</h3>
        <img
          src={icon1}
          alt="icon1"
        />
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className="feature">
        <h3>Components</h3>
        <img
          src={icon2}
          alt="icon2"
        />
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="feature">
        <h3>Single-Way</h3>
        <img
          src={icon3}
          alt="icon3"
        />
        <p>A set of immutable values are passed to the components.</p>
      </div>

      <div className="feature">
        <h3>JSX</h3>
        <img
          src={icon4}
          alt="icon4"
        />
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Content;
