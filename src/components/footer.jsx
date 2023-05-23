import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "white" }}>
      <section>
        {" "}
        <img src={Icon1} alt="Icon1" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </section>

      <section>
        {" "}
        <img src={Icon2} alt="Icon2" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </section>

      <section>
        {" "}
        <img src={Icon3} alt="Icon3" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components.</p>
      </section>

      <section>
        {" "}
        <img src={Icon4} alt="Icon4" />
        <h4>JSX</h4>
        <p>Statically-typed designed to run on modern browsers.</p>
      </section>
    </div>
  );
}

export default Footer;
