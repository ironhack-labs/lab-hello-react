
import Picture3 from '../assets/image3.png'
import Picture4 from '../assets/image4.png'
import Picture5 from '../assets/image5.png'
import Picture6 from '../assets/image6.png'

function Footer (){
    return (
        <div id='Footer'>
            <div className='properties'><img src={Picture3}/>
            <h2><strong>Declarative</strong></h2>
            <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className='properties'><img src={Picture4}/>
            <h2><strong>Components</strong></h2>
            <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='properties'><img src={Picture5}/>
            <h2><strong>Single-Way</strong></h2>
            <p>A set of inmutable values are passed to the component´s.</p>
            </div>
            <div className='properties'><img src={Picture6}/>
            <h2><strong>JSX</strong></h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Footer;