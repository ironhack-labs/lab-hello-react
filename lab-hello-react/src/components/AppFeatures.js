import icon1 from './../images/icon1.png'
import icon2 from './../images/icon2.png'
import icon3 from './../images/icon3.png'
import icon4 from './../images/icon4.png'

const AppFeatures = () => {


    return (
        <div className="App-features">
            <div>
                <img src={icon1} alt="1" />
                <h2>Declarative</h2>
                <p>React makes it painless to creat interative UIs</p>
            </div>
            <div>
                <img src={icon2} alt="2" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div>
                <img src={icon3} alt="3" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's</p>
            </div>
            <div>
                <img src={icon4} alt="4" />
                <h2>JSX</h2>
                <p>Statically-typed designed to run on modern browsers</p>
            </div>
        </div>
    )
}

export default AppFeatures