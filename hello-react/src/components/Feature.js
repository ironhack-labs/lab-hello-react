import image03 from '../images/lp-image03.png';
import image04 from '../images/lp-image04.png';
import image05 from '../images/lp-image05.png';
import image06 from '../images/lp-image06.png';


function Feature() {
    return(
        <div id="feature-container">
            <div class="feature">
                <img src={image03}></img>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div class="feature">
            <img src={image04}></img>
                <h3>Components</h3>
                <p>Build encapulsated components that manage thier state.</p>
            </div>
            <div class="feature">
            <img src={image05}></img>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div class="feature">
            <img src={image06}></img>
                <h3>JSX</h3>
                <p>Statically-typed. designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Feature;