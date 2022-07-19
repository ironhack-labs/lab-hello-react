import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <div className='navbar'>
              <img className='img1' src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png' alt='Ironhacklogo'/>
              <img className='img2' src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png' alt='menu'/>
       
              <h1 className='title'>Say hello to <br></br>ReactJs</h1>
              <br></br>
              <p className='text'>You will learn how to use<br></br>
                  the most popular frontend library,<br></br>
                  and become a super Ninja developer.
              </p>
              <a href='https://github.com/SamPetherick1898' target="_blank" rel="noreferrer"><button className='button'>Awesome!</button></a>
        </div>

        <div className='box2'>
            <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'></img>
            <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png'></img>
            <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png'></img>
            <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png'></img>
        </div>

        <div className='box3'>
            <h2>Declarative</h2>
            <h2>Components</h2>
            <h2>Single-Way</h2>
            <h2>JSX</h2>
        </div>

            <div className='box4'>
                <p className='otherText'>React makes it <br></br> painless to create <br></br> interactive UIs.</p>
                <p className='otherText'>Build encapsulated <br></br> components that <br></br> manage their state.</p>
                <p className='otherText'>A set of immutable <br></br> values are passed to <br></br> the component's.</p>
                <p className='otherText'>Statically-typed, <br></br> designed to run on <br></br> modern browsers.</p>
            </div>

        </div>
  );
}

export default App;
