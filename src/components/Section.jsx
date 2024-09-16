import declImg from "../assets/icon1.png"
import compImg from "../assets/icon2.png"
import singleImg from "../assets/icon3.png"
import jsxImg from "../assets/icon4.png"

function Section(){
    return(
        <div id="icons">
            <div>
                <img src={declImg} alt="declarative icon" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src={compImg} alt="components icon" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src={singleImg} alt="single-way icon" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src={jsxImg} alt="jsx icon" />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
}

export default Section;