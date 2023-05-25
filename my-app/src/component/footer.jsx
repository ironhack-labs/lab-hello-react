import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer py-5" style={{ backgroundColor: "white" }}>
      <section>
        {" "}
        <img src={Icon1} alt="Icon1" />
        <div className="px-4">
        <h4>Declarative</h4>
        <p className="w-75 text-muted">React makes it painless to create interactive UIs.</p>
        </div>
      </section>

      <section>
        {" "}
        <img src={Icon2} alt="Icon2" />
        <div className="px-4">
        <h4>Components</h4>
        <p className="w-75 text-muted">Build encapsulated components that manage their state.</p>
        </div>
      </section>

      <section>
        {" "}
        <img src={Icon3} alt="Icon3" />
        <div className="px-4">
        <h4>Single-Way</h4>
        <p className="w-75 text-muted">A set of immutable values are passed to the components.</p>
        </div>
      </section>

      <section>
        {" "}
        <img src={Icon4} alt="Icon4" />
        <div className="px-4">
        <h4>JSX</h4>
        <p className="w-75 text-muted">Statically-typed designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;