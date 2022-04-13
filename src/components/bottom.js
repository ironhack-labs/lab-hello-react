function Bottom (props) {
	return (
		<>
			<div class="card">
				<div className = "picture">
					<img src={props.picture} alt="alternative"></img>
				</div>
				<div className = "title">
					<p>{props.title}</p>
				</div>
				<div className = "subtitle">
					<p>{props.subtitle}</p>
				</div>
			</div>
		</>
	)
}

export default Bottom;