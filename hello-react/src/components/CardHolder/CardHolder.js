import ReactCard from "../ReactCard/ReactCard"
import Icon1 from "../../images/icon1.png"
import Icon2 from "../../images/icon2.png"
import Icon3 from "../../images/icon3.png"
import Icon4 from "../../images/icon4.png"
import { v4 as uuidv4 } from 'uuid';

function CardHolder() {
    const cards = [
        {src: Icon1, header: 'Declarative', description: 'React makes it painless to create interactive UIs.'},
        {src: Icon2, header: 'Components', description: 'Build encapsulated components that manage their state.'},
        {src: Icon3, header: 'Single-Way', description: 'A set of immutable values area passed to the components.'},
        {src: Icon4, header: 'JSX', description: 'Statically-typed, designed to run on modern browsers.'}
    ]
    
    return (
        <div>
            {cards.map(card => {
            return <ReactCard key={uuidv4()} src={card.src} header={card.header} description={card.description}/>
            })}
        </div>
    )
}

export default CardHolder;