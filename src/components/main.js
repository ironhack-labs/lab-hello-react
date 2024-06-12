import declarative from '../images/declarative.png'
import components from '../images/components.png'
import singleWay from '../images/singleWay.png'
import JSX from '../images/jsx.png'

function Main (){
	return(

		<div className='main'>
	<div>
	 <img src={declarative} alt="Declarartive" />
	 <h2>Declarative</h2>
	 <p>React makes it painless to create interactive UIs</p>
	</div>
	<div>
	 <img src={components} alt="Components" />
	 <h2>Components</h2>
	 <p>Buil encapsulated components that manage their state</p>
	</div>
	<div>
	 <img src={singleWay} alt="Single-Way" />
	 <h2>Single-Way</h2>
	 <p>A set of immutable values are passed to the component´s</p>
	</div>
	<div>
	 <img src={JSX} alt="JSX" />
	 <h2>JSX</h2>
	 <p>Statically-typed, designed to run on modern browsers.</p>
	</div>
 </div>
);

}

export default Main;