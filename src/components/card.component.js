import './card.component.style.css'

export default function Card(props) {
  return (
    <div className="Card-icon col-sm-12 col-md-3">
      <img src={props.image} className="mb-3"/>
      <div className="Card-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
