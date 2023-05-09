import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function SectionOne() {
  return (
    <section>
        <div className="section-container">
            <div className="declarative">
                <img src={icon1} alt="logo" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="components">
                <img src={icon2} alt="menu" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="single-way">
                <img src={icon3} alt="menu" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component´s.</p>
            </div>
            <div className="jsx">
                <img src={icon4} alt="menu" />
                <h3>JSX</h3>
                <p>Statically-typed. Designed to run on modern browsers.</p>
            </div>
        </div>
    </section>
  );
}

export default SectionOne;