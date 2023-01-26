import './benefits.css'
import firstBen from '../../images/icon1.png'
import secondBen from '../../images/icon2.png'
import thirdBen from '../../images/icon3.png'
import forthBen from '../../images/icon4.png'



const Benefits = ( ) => {
    return (
        <div className="Benefits">
            <div>
            <img src={firstBen} alt="first-img"></img>
                <h3>Declarative</h3>
                <p className="Description">React makes it painless to create interactive UIs.</p>
            </div>
            <div>
            <img src={secondBen} alt="second-img"></img>
            <h3>Components</h3>
                <p className="Description">Build encapsulated components that manage their state.</p>
            </div>
            <div>
            <img src={thirdBen} alt="third-img"></img>
                <h3>Single-Way</h3>
                <p className="Description">A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src={forthBen} alt="forth-img"></img>
                <h3>JSX</h3>
                <p className="Description">Statically-typed, designed to run o modern browsers.</p>
            </div>

          

        </div>
    )
}

export default Benefits;