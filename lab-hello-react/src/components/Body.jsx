import declarative from '../images/education-team.png';
import components from '../images/education-team-2.png';
import singleway from '../images/education-team-3.png';
import jsximage from '../images/education-team-4.png';

function Body() {

    return (

        <div className="bottom-body">
            <div className="blurb">
                <img src={declarative} alt="declarative"></img>
                <h2>Declarative</h2>
                <h5>React makes it painless to create interactive UIs.</h5>
            </div>
            <div className="blurb">
                <img src={components} alt="components"></img>
                <h2>Components</h2>
                <h5>Build encapsulated components that manage their state.</h5>
            </div>
            <div className="blurb">
                <img src={singleway} alt="single-way"></img>
                <h2>Single-Way</h2>
                <h5>A set of immutable values are passed to the component's.</h5>
            </div>
            <div className="blurb">
                <img src={jsximage} alt="JSX"></img>
                <h2>JSX</h2>
                <h5>Statistically-typed, designed to run on modern browsers.</h5>
            </div>
        </div>

    )
}

export default Body;