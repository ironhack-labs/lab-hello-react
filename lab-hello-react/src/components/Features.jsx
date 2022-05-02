import DeclarativeImage from '../images/wrench-icon.png';
import ComponentsImage from '../images/pen-icon.png';
import SingleWayImage from '../images/settings-icon.png';
import JSXImage from '../images/html-tag-icon.png';


function Features () {
  return (
    <div className='features'>
      <div>
        <img src={DeclarativeImage} alt="small img" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interatuve UIs.</p>
      </div>
      <div>
        <img src={ComponentsImage} alt="small img" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={SingleWayImage} alt="small img" />
        <h4>Single-Way</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={JSXImage} alt="small img" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
  
    </div>
  )
}

export default Features;