import iconImg1 from "../assets/icon1.png";
import iconImg2 from "../assets/icon2.png";
import iconImg3 from "../assets/icon3.png";
import iconImg4 from "../assets/icon4.png";

function Elements(){

    return(
        <section className="elements-container">
        <div className="each-element">
            <img src={iconImg1} alt="img" className="images-section"/>
            <h4 className="text-section">Declarative</h4>
            <p className="text-section">React makes it painless to create interactive UIs.</p>
        </div>
        <div className="each-element">
            <img src={iconImg2} alt="img" className="images-section"/>
            <h4 className="text-section">Components</h4>
            <p className="text-section">Build encapsuled components that manage their state.</p>
        </div>
        <div className="each-element">
            <img src={iconImg3} alt="img" className="images-section"/>
            <h4 className="text-section">Single-Way</h4>
            <p className="text-section">A set of immutable values are passed to the component's.</p>
        </div>
        <div className="each-element">
            <img src={iconImg4} alt="img" className="images-section"/>
            <h4 className="text-section">JSX</h4>
            <p className="text-section">Statically typed, designed to run on modern browsers.</p>
        </div>
    </section>
    );

}

export default Elements;