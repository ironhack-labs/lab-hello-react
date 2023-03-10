import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

function Body() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='m-5'>
        <img alt="" src={icon1}></img>
        <h3>Declarative</h3>
        <p className='text-secondary'>React make it paintless to create interctive UIs</p>
      </div>
      <div className='m-5'>
        <img  alt="" src={icon2}></img>
        <h3>Components</h3>
        <p className='text-secondary'>Build encapsulated components that manage their state</p>
      </div>
      <div className='m-5'>
        <img  alt="" src={icon3}></img>
        <h3>Single-Way</h3>
        <p className='text-secondary'>A set of inmmutable values are passed to the component's</p>
      </div>
      <div className='m-5'>
        <img  alt="" src={icon4}></img>
        <h3>JSX</h3>
        <p className='text-secondary'>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  )
}



export default Body