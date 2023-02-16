import declarative from '../images/declarative.png'
import components from '../images/components.png';
import singleway from '../images/single-way.png';
import jsx from '../images/jsx.png';

function Main(){
    return(
        <div className="Main" class="main">
            <div>
                <img src={declarative} alt="" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src={components} alt="" />
                <h2>Components</h2>
                <p>Build encapsulated components and manage their state.</p>
            </div>
            <div>
                <img src={singleway} alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable valuables are passed to the components.</p>
            </div>
            <div>
                <img src={jsx} alt="" />
                <h2>JSX</h2>
                <p>Statically typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}
export default Main