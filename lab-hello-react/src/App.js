// import logo from './logo.svg';
// import './App.css';

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
//---------------------------------------------------
// src/App.js
import './App.css';
//load images

function App() {
	return (
		<div className="container">
			<header className="header">
				<div className="headerImages">
					<img src="images/logo.png" alt="logo" />
					<a href="/">
						<img src="images/menu-top-xs.png" alt="menu" id="imageMenu" />
					</a>
				</div>
				<div className="headerContent">
					<h1 className="headerContentH1">Say hello to ReactJS</h1>
					<p className="headerContentP">
						You will learn how to use<br /> the most popular frontend library,<br /> and become a super
						Ninja developer.
					</p>
					<a className="headerContentButton" href="/">
						Awesome!
					</a>
				</div>
			</header>
			<section className="section">
				<div>
					<img src="images/icon1.png" alt="logo" />
					<h2 className="sectionH1"> Declarative</h2>
					<p className="sectionP">
						React makes it<br /> painless to create<br /> interactive UIs
					</p>
				</div>
				<div>
					<img src="images/icon2.png" alt="logo" />
					<h2 className="sectionH1">Components</h2>
					<p className="sectionP">
						Build encapsulated<br /> components that<br /> manage their state.
					</p>
				</div>
				<div>
					<img src="images/icon3.png" alt="logo" />
					<h2 className="sectionH1">Single-Way</h2>
					<p className="sectionP">
						A set of immutable<br />values are passed to<br /> the component's.
					</p>
				</div>
				<div>
					<img src="images/icon4.png" alt="logo" />
					<h2 className="sectionH1">JSX</h2>
					<p className="sectionP">
						Statically-typed,<br /> designed to run on<br /> modern browsers.
					</p>
				</div>
			</section>
		</div>
	);
}
export default App;
