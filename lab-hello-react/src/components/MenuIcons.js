function MenuIcons({ image }) {
	return (
		<div>
			<img src={image} alt="logo" />
			<h2 className="sectionH1"> Declarative</h2>
			<p className="sectionP">
				React makes it<br /> painless to create<br /> interactive UIs
			</p>
		</div>
	);
}

export default MenuIcons;
