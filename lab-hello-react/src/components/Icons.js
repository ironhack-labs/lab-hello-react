import "./Icons.css";
import iconOne from "../images/icon1.png";
import iconTwo from "../images/icon2.png";
import iconThree from "../images/icon3.png";
import iconFour from "../images/icon4.png";

function Icons() {
  return (
    <div className="icons">
      <div>
        <img src={iconOne} />
        <h3>Declarative</h3>
        <p>
          React makes it <br />
          painless to create interective UIs
        </p>
      </div>
      <div>
        <img src={iconTwo} />
        <h3>Components</h3>
        <p>
          Build encapsulated <br /> components that manage their state
        </p>
      </div>
      <div>
        <img src={iconThree} />
        <h3>Single-Way</h3>
        <p>
          A set of immutable <br /> values are passed to the component`s.
        </p>
      </div>
      <div>
        <img src={iconFour} />
        <h3>JSX</h3>
        <p>
          Statically-typed, <br /> designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}

export default Icons;
