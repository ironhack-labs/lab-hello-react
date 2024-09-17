import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Gallery = () => {
  return ( 
    <div className="iconsContainer">
      <div className="icons">
        <img className='iconImg' src={icon1} alt="icon 1" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="icons">
        <img className='iconImg' src={icon2} alt="icon 2" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="icons">
        <img className='iconImg' src={icon3} alt="icon 3" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div className="icons">
        <img className='iconImg' src={icon4} alt="icon 4" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
   );
}
 
export default Gallery;