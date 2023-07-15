import IconOne from '../images/icon1.png';
import IconTwo from '../images/icon2.png';
import IconThree from '../images/icon3.png';
import IconFour from '../images/icon4.png';

function Icons() {
  return (
    <div>
    <div className="icon-box">
      <img src={ IconOne } alt="icon" />
      <h5>Declarative</h5>
      <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="icon-box">
      <img src={ IconTwo } alt="icon" />
      <h5>Components</h5>
      <p>Build encapsulated components that manage their state</p>
      </div>

      <div className="icon-box">
      <img src={ IconThree } alt="icon" />
      <h5>Single-Way</h5>
      <p>A set of immutable values are passed to the component's</p>
      </div>
      
      <div className="icon-box">
      <img src={ IconFour } alt="icon" />
      <h5>JSX</h5>
      <p>Statically-typed designed to run on modern browsers</p>
      </div>
      
    </div>
  );
}

export default Icons;