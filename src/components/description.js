import icon1 from '../images/img3.png';
import icon2 from '../images/img4.png';
import icon3 from '../images/img5.png';
import icon4 from '../images/img6.png';



function Description(){

    return (
        <div id="description">
        <div className="card"><img src={icon1} alt="icons" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>

        </div>
        <div className="card"><img src={icon2} alt="icons" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p></div>
        <div className="card"><img src={icon3} alt="icons" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p></div>
        <div className="card"><img src={icon4} alt="icons" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p></div>
        </div>
    )
}

export default Description