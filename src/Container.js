import './Container.css'
import image1 from './images/icon1.png'
import image2 from './images/icon2.png'
import image3 from './images/icon3.png'
import image4 from './images/icon4.png'

const Container = () => {
    return (
    <div className="container">
        <div className="element">
            <img src={image1} alt="tools " />
            <h3 className="subtitle">Declarative</h3>
            <p class="text"> React makes it painless to create interactive UIs</p>
        </div>
        <div className="element">
            <img src={image2} alt="components " />
            <h3 className="subtitle">Components</h3>
            <p class="text"> Build encapsulated components that manage their state</p>
        </div>
        <div className="element">
            <img src={image3} alt="set " />
            <h3 className="subtitle">Single-Way</h3>
            <p class="text"> A set of inmutable values are passed to the component's</p>
        </div>
        <div className="element">
            <img src={image4} alt="code " />
            <h3 className="subtitle">JSX</h3>
            <p class="text"> Statically-Typed, desigend to run on modern browsers</p>
        </div>

    </div>
    )
}

export default Container