import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Header from './components/Header';
import Section from './components/Section';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
	return (
		<div className="App">
			<Navbar />

			<header>
				<Header />
			</header>

			<Section>
				<Card imgUrl={icon1} title='Declarative' text='React makes it painless to create interactive UIs.'/>
				<Card imgUrl={icon2} title='Components' text='Build encapsulated components that manage their state.'/>
				<Card imgUrl={icon3} title='Single-Way' text="A set of immutable values are passed to the component's."/>
				<Card imgUrl={icon4} title='JSX' text='Statically-typed, designed to run on modern browsers.'/>
			</Section>
		</div>

	);
}

export default App;
