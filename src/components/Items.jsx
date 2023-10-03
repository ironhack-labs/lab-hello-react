import IconOne from "/src/assets/iron-icon1.png";
import IconTwo from "/src/assets/iron-icon2.png";
import IconThree from "/src/assets/iron-icon3.png";
import IconFour from "/src/assets/iron-icon4.png";

function Items() {
    return(
        <div className="icons-container">
            <div className="icons-wrap">
                <img src={IconOne} alt="" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icons-wrap">
                <img src={IconTwo} alt="" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="icons-wrap">
                <img src={IconThree} alt="" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="icons-wrap">
                <img src={IconFour} alt="" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Items;