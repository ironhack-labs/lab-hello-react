import IconOne from "./IconOne";
import IconTwo from "./IconTwo";
import IconThree from "./IconThree";
import IconFour from "./IconFour";

function Perks() {
	return (
		<div className="container">
			<div>
				<IconOne />
				<h3>Declarative</h3>
				<p>React makes it painless to create interactive UIs.</p>
			</div>

			<div>
				<IconTwo />
				<h3>Components</h3>
				<p>Build encapsulated components that manage their state.</p>
			</div>

			<div>
				<IconThree />
				<h3>Single-Way</h3>
				<p>A set of immutable values are passed to the component's.</p>
			</div>

			<div>
				<IconFour />
				<h3>JSX</h3>
				<p>Statically-types designed to run on modern browsers</p>
			</div>
		</div>
	);
}

export default Perks;
