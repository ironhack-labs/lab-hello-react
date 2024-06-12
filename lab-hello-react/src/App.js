import ironhackLogo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-dark">
        <div className="container-fluid mx-5 bg-dark">
          <img src={ironhackLogo} alt=""/>
          <img src={menu} alt="" className='justify-content-end'/>
        </div>
      </nav>
      <div className='container-fluid bg-dark'>
        <div className='mx-5 text-light py-5 bg-dark'>
          <h1 className='principal-text'><b>Say hello to <br/> ReactJS</b></h1>
          <h5 className='mt-5 fw-light'>You will learn how to use<br/> the most popular frontend library<br/> and become a super Ninja developer.</h5>
          <button className='btn btn-light text-dark mt-5 py-3 px-4'><b>Awesome!</b></button>
        </div>
      </div>
      <div className='container-fluid row justify-content-evenly'>
        <div className="card col-12 col-md-6 col-lg-4 col-xl-3">
          <img src={img1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title"><b>Declarative</b></h4>
            <h5 className="card-text fw-light">React makes it painless to create interactive UIs</h5>
          </div>
        </div>
        <div className="card col-12 col-md-6 col-lg-4 col-xl-3">
          <img src={img2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title"><b>Components</b></h4>
            <h5 className="card-text fw-light">Build encapsulated components that manage their state.</h5>
          </div>
        </div>
        <div className="card col-12 col-md-6 col-lg-4 col-xl-3">
          <img src={img3} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title"><b>Single-Way</b></h4>
            <h5 className="card-text fw-light">A set of inmutable values are passed to the component's.</h5>
          </div>
        </div>
        <div className="card col-12 col-md-6 col-lg-4 col-xl-3">
          <img src={img4} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title"><b>JSX</b></h4>
            <h5 className="card-text fw-light">Statically-typed, designed to run on modern browsers.</h5>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
