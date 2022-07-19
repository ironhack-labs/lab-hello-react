import NavBar from "./Navbar";

function Header() {
	return (
		<div>
			<NavBar />

			<div className="content">
				<h1>
					Say hello to
					<br /> reactJS
				</h1>
				<p>
					You will learn how to use the most popular frontend library and become
					a super Ninja developer
				</p>
				<button>Awesome!</button>
			</div>
		</div>
	);
}

export default Header;
