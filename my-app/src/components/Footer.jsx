import "../App.js";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Footer() {
    return (
        <div className="footer">
        
        <div className="footer-div">
            <img src={icon1} className="icon" alt="Icon 1" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="footer-div">
            <img src={icon2} className="icon" alt="Icon 2" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="footer-div">
            <img src={icon3} className="icon" alt="Icon 3" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="footer-div">
            <img src={icon4} className="icon" alt="Icon 4" />
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers.</p>
        </div>

        </div>
    );
}

export default Footer;