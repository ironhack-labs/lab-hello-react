import { useState } from "react";

function FeatureCard(props) {
  const [cards, setCards] = useState(props.cards);
  console.log("este es el prop: ", cards)

  return (
    <>
      {cards.map((card) => {
        return(
          <div className="card" key={card.id}>
            <img src={ card.icon }/>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        )
      })}
    </>   
  )
}

export default FeatureCard;
