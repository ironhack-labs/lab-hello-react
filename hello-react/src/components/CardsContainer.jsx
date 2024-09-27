import './CardsContainer.css';

function CardsContainer(props) {
  return (
    <div className="cards-container">
      {props.children}
    </div>
  )
}

export default CardsContainer