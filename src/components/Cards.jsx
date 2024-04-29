//importamos las imágenes
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"


function Cards() {

    return (
        <section id="cards">
            <div>
                <img src={icon1} alt="icon1" width="100px"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
                <img src={icon2} alt="icon2" width="100px"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div>
                <img src={icon3} alt="icon3" width="100px"/>
                <h3>Single-Way</h3>
                <p>A set of inmutable values are passed to the component's.</p>
            </div>
            <div>
                <img src={icon4} alt="icon4" width="100px"/>
                <h3>JSX</h3>
                <p>Statically tuyped, designed to run on modern browsers</p>
            </div>
        </section>
    )
}

export default Cards