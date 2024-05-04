import iconImg1 from '../assets/icon1.png'
import iconImg2 from '../assets/icon2.png'
import iconImg3 from '../assets/icon3.png'
import iconImg4 from '../assets/icon4.png'


function Icons (){
    return (

        <section className="icons">
            <div id="icon1">
                <img src={iconImg1} height={'150px'}/>
                <h2>Declarative</h2>
                <p>React make it painless to create interactive UIs.</p>
            </div>

            <div id="icon2">
                <img src={iconImg2} height={'150px'}/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>

            <div id="icon3">
                <img src={iconImg3} height={'150px'}/>
                <h2>Single-Way</h2>
                <p>A set of inmutable values are passed to the components</p>
            </div>

            <div id="icon4">
                <img src={iconImg4} height={'150px'}/>
                <h2>JSX</h2>
                <p>Statically typed, designed to run in modern browsers.</p>
            </div>
        </section>
    )}

        export default Icons
            








       