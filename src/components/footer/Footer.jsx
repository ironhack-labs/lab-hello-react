import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import "./footer.css";

function Footer() {
    return (
        <footer className="card">
            <div>
                <img src={icon1} alt="Declarative" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div>
                <img src={icon4} alt="" />
                <h3>JSX</h3>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>
        </footer>
    );
}


export default Footer;