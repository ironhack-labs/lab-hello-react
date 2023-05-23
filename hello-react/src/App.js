import './App.css';
import Header from './components/Header';
import Teaser from './components/Teaser';

import teaser1img from './images/icon1.png';
import teaser2img from './images/icon2.png';
import teaser3img from './images/icon3.png';
import teaser4img from './images/icon4.png';

function App() {
	return (
		<div className="App">
			<Header
				headline={'Say hello to ReactJS'}
				text={'You will learn how to use the most popular frontend framework and become a super Ninja developer.'}
				button={'Awesome'}
			/>
			<main>
				<div className="columns">
					<div className="column">
						<Teaser imgsrc={teaser1img} headline={'Declarative'} text={'React makes it easy to create interactive UIs'} />
					</div>
					<div className="column">
						<Teaser
							imgsrc={teaser2img}
							headline={'Components'}
							text={'Build encapsulated components that manage their state'}
						/>
					</div>
					<div className="column">
						<Teaser
							imgsrc={teaser3img}
							headline={'Single Way'}
							text={'A set of immutable values are passed to the component'}
						/>
					</div>
					<div className="column">
						<Teaser imgsrc={teaser4img} headline={'JSX'} text={'Statically typed, designed to run on modern browsers'} />
					</div>
				</div>
			</main>
		</div>
	);
}
export default App;
