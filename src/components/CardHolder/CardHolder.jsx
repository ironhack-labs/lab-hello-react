import Card from '../Card/Card'
import cardData from "../data/cardData.json"
import { v4 as uuidv4 } from 'uuid';

function CardHolder(props) {
  return (
  <div className="cardHolder">
    {cardData.map(eachObj => {
      return <Card data={eachObj} key={uuidv4()}/>
    })}
  </div>
  )
}

export default CardHolder