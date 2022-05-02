import iconOne from '../images/icon1.png'
import iconTwo from '../images/icon2.png'
import iconThree from '../images/icon3.png'
import iconFour from '../images/icon4.png'

function Card(){

    return (
        <div className="row card-group pt-4 mt-5 w-75">
          <div className="card col-3 border-0">
            <img className="card-img-top" src={iconOne} alt="Card Top" />
            <div className="card-body">
              <h5 className="card-title">Declarative</h5>
              <p className="card-text">React makes it painless to create interactive UIs.</p>
            </div>
          </div>
          <div className="card col-3  border-0">
            <img className="card-img-top" src={iconTwo} alt="Card Top" />
            <div className="card-body">
              <h5 className="card-title">Components</h5>
              <p className="card-text">Build encapsulated components that manage their state.</p>
            </div>
          </div>
          <div className="card col-3  border-0">
            <img className="card-img-top" src={iconThree} alt="Card Top" />
            <div className="card-body">
              <h5 className="card-title">Single-Way</h5>
              <p className="card-text">A set of immutable values are passed to the component's.</p>
            </div>
          </div>
          <div className="card col-3  border-0">
            <img className="card-img-top" src={iconFour} alt="Card Top" />
            <div className="card-body">
              <h5 className="card-title">JSX</h5>
              <p className="card-text">Statically-typed designed to run on modern browsers.</p>
            </div>
          </div>
        </div>
  )
}

export default Card;