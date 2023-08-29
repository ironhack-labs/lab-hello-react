import logob from '../images/therd.png'
import logoc from '../images/fourth.png'
import logod from '../images/fif.png'
import logoe from '../images/sis.png'


function Footer() {
    return(

        <>
        <div id='footer'>
        
        <div className='ending'>
            
            <img src={logob}  />
            <h2>Declarative</h2>
            <p>React Makes it<br/> painless to create <br/> interactive UIs.</p>
        </div>
        <div className='ending'>
            <img src={logoc}  />
            <h2>components</h2>
            <p>Build encapsulated <br/> components that <br/> manage their state.</p>
        </div>
        <div className='ending'>
            <img src={logod}  />
            <h2>Single-Way</h2>
            <p>A set of inmutable <br/>values are passed to <br/> the component's</p>
        </div>
        <div className='ending'>
            <img src={logoe}  />
            <h2>JSX</h2>
            <p>Statically-typed. <br/> designed to run on <br/> modern browsers.</p>
            </div>

        </div>
        
        </>
    )
        
    
}

export default Footer