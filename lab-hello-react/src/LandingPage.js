import './LandingPage.css';

import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';

const LandingPage = () => {
  return (
    <div>
      <div className='background'>
        <div className='background-logos'>
          <img
            className='ironhack-logo'
            src={ironhackLogo}
            alt='Ironhack Logo'
          ></img>
          <img className='menu-top-img' src={menuTop} alt='Menu top img'></img>
        </div>
        <div className='header-container'>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use<br></br>
            the most popular frontend library,<br></br>
            and become a super Ninja developer.
          </p>
          <button type='button'>Awesome!</button>
        </div>
      </div>
      <div className='features'>
        <div>
          <img src={icon1} alt='Icon 1'></img>
          <h2>Declarative</h2>
          <p>
            React makes it<br></br>
            painless to create interactive UIs.
          </p>
        </div>
        <div>
          <img src={icon2} alt='Icon 2'></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt='Icon 3'></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt='Icon 4'></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
