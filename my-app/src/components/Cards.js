import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Cards = () => {
  return (
    <div className="cards">
        <div className="card">
            <img className='icon' src={icon1} alt="icon1" />
            <h3>Declarative</h3>
            <p>React makes it <br />painless to create <br />interactive UIs.</p>
        </div>
        <div className="card">
            <img className='icon' src={icon2} alt="icon2" />
            <h3>Components</h3>
            <p>Buil encapsulated <br />components that <br />manage their state.</p>
        </div>
        <div className="card">
            <img className='icon' src={icon3} alt="icon3" />
            <h3>Single-Way</h3>
            <p>A set of immutable <br />values are passed to <br />the componenet's</p>
        </div>
        <div className="card">
            <img className='icon' src={icon4} alt="icon4" />
            <h3>JSX</h3>
            <p>Statically-typed <br />designed to run on <br />modern browsers.</p>
        </div>
    </div>
  )
}

export default Cards