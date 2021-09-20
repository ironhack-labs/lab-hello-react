// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menuIcon from './images/menu-top-xs.png';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';


function App() {
  return (
    <div className="container">
			<header>
				<div className="header-imgs">
					<img src={logo} alt="Ironhack logo" />
					<a href="/">
						<img src={menuIcon} alt="menu icon" id="menuIcon" />
					</a>
				</div>
				<div>
					<h1>Say hello to <br />ReactJS</h1>
					<p className="header-p">
						You will learn how to use<br /> the most popular frontend library,<br /> and become a super
						Ninja developer.
					</p>
					<button>
						Awesome!
					</button>
				</div>
			</header>
			<section className="section">
				<div>
					<div class="section-icon"><img src={img1} alt="icon 1" /></div>
					<h2 className="section-h2"> Declarative</h2>
					<p className="section-p">
						React makes it<br /> painless to create<br /> interactive UIs
					</p>
				</div>
				<div>
          <div class="section-icon"><img src={img2} alt="icon 2" /></div>
					<h2 className="section-h2">Components</h2>
					<p className="section-p">
						Build encapsulated<br /> components that<br /> manage their state.
					</p>
				</div>
				<div>
					<img src={img3} alt="logo" />
					<div class="section-icon"><h2 className="section-h2">Single-Way</h2></div>
					<p className="section-p">
						A set of immutable<br />values are passed to<br /> the component's.
					</p>
				</div>
				<div>
					<img src={img4} alt="logo" />
					<div class="section-icon"><h2 className="section-h2">JSX</h2></div>
					<p className="section-p">
						Statically-typed,<br /> designed to run on<br /> modern browsers.
					</p>
				</div>
			</section>
		</div>
  );
}
export default App;
