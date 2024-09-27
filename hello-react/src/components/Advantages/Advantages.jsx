import "./advantages.css";
import Declarative from "../../assets/icon1.png"
import Components from "../../assets/icon2.png"
import SingleW from "../../assets/icon3.png"
import JS from "../../assets/icon4.png"


const Advantages = () => {
    return (
    <nav>
        <div className="Advantages">
            <div>
                <img src={Declarative} alt="declarative-img"></img>
                <h3>Declarative</h3>
                <p className="Description">React makes it painless to create interactive UIs.</p>
            </div>

            <div>
                <img src={Components} alt="components-img"></img>
                <h3>Components</h3>
                <p className="Description">Build encapsulated components that manage their state.</p>
            </div>

            <div>
                <img src={SingleW} alt="single-img"></img>
                <h3>Single-Way</h3>
                <p className="Description">A set of immutable values are passed to the component's.</p>
            </div>

            <div>
                <img src={JS} alt="jsx-img"></img>
                <h3>JSX</h3>
                <p className="Description">Statically-typed, designed to run o modern browsers.</p>
            </div>

        </div>
    </nav>
    )
}

export default Advantages;