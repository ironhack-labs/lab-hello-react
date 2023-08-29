import './CardsList.css';
import Card from '../Card/Card';
const Declarative = '../../../public/images/Declarative.png'
const Components = '../../../public/images/Components.png'
const SingleWay = '../../../public/images/Single-way.png'
const JSX = '../../../public/images/JSX.png'


function CardsList() {

    const cards = [
        {
            id: 1,
            img: Declarative,
            title: 'Declarative',
            description: 'React makes it painless to create interactive UIs.',

        },
        {
            id: 2,
            img: Components,
            title: 'Components',
            description: 'Build encapsulated components that manage their state.',
        },
        {
            id: 3,
            img: SingleWay,
            title: 'Single-Way',
            description: 'A set of immutable values are passed to the component\'s.',
        },
        {
            id: 4,
            img: JSX,
            title: 'JSX',
            description: 'Statically-typed, designed to run on modern browsers.',
        }
    ]


    return (
        <div className="cards-list">
            {cards.map(card => <Card img = {card.img} title = {card.title} description = {card.description} key={card.id}/>
            )}
        </div>
    );
}

export default CardsList;