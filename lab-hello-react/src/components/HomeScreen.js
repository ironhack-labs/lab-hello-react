import logo from '../images/ironhacklogo.png';
import bars from '../images/bars.png';
import pic1 from '../images/wrench.png';
import pic2 from '../images/play.png';
import pic3 from '../images/cog.png';
import pic4 from '../images/code.png';

function HomeScreen() {
  return (
    <div className="Home">
      <div className="App-header">
        <nav>
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <img src={bars} alt="nav button" />
        </nav>
<div className="left">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>

        <button className="AwesomeButton">Awesome!</button>
        </div></div>

      <div className="Icons">
        <div>
          <img src={pic1} alt="1" />
          <h2>Declarative</h2>
          <p> React makes it painless to create interactive UIs.</p>
        </div>


        <div>
          <img src={pic2} alt="2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src={pic3} alt="3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div>
          <img src={pic4} alt="4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;
