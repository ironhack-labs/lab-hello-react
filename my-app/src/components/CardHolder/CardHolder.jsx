import Card from '../Card/Card';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import Icon4 from '../../images/icon4.png';
import { v4 as uuidv4 } from 'uuid';
import './CardHolder.css';

function CardHolder() {
    const data = [
        {src: Icon1, title: 'Declarative', description: 'React makes it painless to create interactive UIs.'},
        {src: Icon2, title: 'Components', description: 'Build encapsulated components that manage their state.'},
        {src: Icon3, title: 'Single-Way', description: 'A set of immutable values are passed to the components.'},
        {src: Icon4, title: 'JSX', description: 'Statically-typed, designed to run on modern browsers.'}
    ]

    return (
        <div class='cardholder'>
            {data.map((card) => {
                return <Card src={card.src} key={uuidv4()} title={card.title} description={card.description} />
             })}
        </div>
    );
}

export default CardHolder;