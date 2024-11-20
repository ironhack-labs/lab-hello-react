import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import './body.css'

function Body() {
    return (
        <div className='body-container'>
            <div className='body-div'>
                <div>
                    <img src={icon1}/>
                </div>
                <h2 className='bodyh2'>Declarative</h2>
                <div className='bodyp'><p>React makes it painless to create interactive UIs.</p></div>
            </div>
            <div className='body-div'>
                <div>
                    <img src={icon2}/>
                </div>
                <h2 className='bodyh2'>Components</h2>
                <div className='bodyp'><p>Buils encapsulated components that manage thier state.</p></div>
            </div>
            <div className='body-div'>
                <div>
                    <img src={icon3}/>
                </div>
                <h2 className='bodyh2'>Single-Way</h2>
                <div className='bodyp'><p>A set of immutable values are passed to the components.</p></div>
            </div>
            <div className='body-div'>
                <div>
                    <img src={icon4}/>
                </div>
                <h2 className='bodyh2'>JSX</h2>
                <div className='bodyp'><p>Statically-typed, designed to run on modern browsers.</p></div>
            </div>
        </div>
    );
}

export default Body