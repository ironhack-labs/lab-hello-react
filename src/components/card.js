export function Card(props) {
	return (
		<>
			<div className="card">
				<img src={props.card.img} className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-text">{props.card.title}</h5>
					<p className="card-text">{props.card.paragraph}</p>
				</div>
			</div>
		</>
	)
}
