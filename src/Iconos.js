import './Iconos.css';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';

const Iconos = ()=>{
  return(
    <div className="Iconos">
      <div>
        <img src={img1} alt="Declarative"/>
        <p className="title">Declarative</p>
        <p>React makes it <br/> painless to create <br/>interactive UIs.</p>
      </div>

      <div>
        <img src={img2} alt="Components"/>
        <p className="title">Components</p>
        <p>Build encapsulated<br/> components that<br/> manage their state.</p>
      </div>

      <div>
        <img src={img3} alt="Single-Way"/>
        <p className="title">Single-Way</p>
        <p>A set of immutable <br/>value are passed to<br/> the component's</p>
      </div>

      <div>
        <img src={img4} alt="JSX"/>
        <p className="title">JSX</p>
        <p>Statically-typed,<br/> designed to run on <br/>modern browsers.</p>
      </div>
  
    </div>
  )
}

export default Iconos 