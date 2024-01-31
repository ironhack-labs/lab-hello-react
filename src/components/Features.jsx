import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
function Features(){
    return(
    <div className='features'>
        <div className='feature-card'>
            <img src={icon1} alt="icon1" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
         </div>
        <div className='feature-card'>
            <img src={icon2} ait="icon2" />
            <h3>Components</h3>
            <p>Build encupsulated components that manage their state.</p>
        </div>
        <div className='feature-card'>
            <img src={icon3} ait="icon3" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className='feature-card'>
            <img src={icon4} ait="icon4" />
            <h3>JSX</h3>
            <p>statically-typed,desingedto run on modern browers.</p>
        </div>
    </div>
    )
}
export default Features