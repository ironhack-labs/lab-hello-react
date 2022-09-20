import icon1 from "../image/icon1.png"
import icon2 from "../image/icon2.png"
import icon3 from "../image/icon3.png"
import icon4 from "../image/icon4.png"


function Content() {
    return (
        <div class="App-content">
            <div>
                <img src={icon1} alt="icon1"/>
                <h4>Declarative</h4>
                <p>React makes it <br/>
                painless to create<br/>
                interactive Uls.</p>
            </div>
            <div>
                <img src={icon2} alt="icon2"/>
                <h4>Components</h4>
                <p>Build encapsulated<br/>
                components that<br/>
                manage their state.
                </p>
            </div>
            <div>
                <img src={icon3} alt="icon3"/>
                <h4>Single-Way</h4>
                <p>A set of immutable<br/>
                values are passed to<br/>
                the component's.</p>
            </div>
            <div>
                <img src={icon4} alt="icon4"/>
                <h4>JSX</h4>
                <p>Statically-typed.<br/>
                designed to run on<br/>
                modern browsers.</p>
            </div>
        </div>
    );
  }
  
  export default Content;