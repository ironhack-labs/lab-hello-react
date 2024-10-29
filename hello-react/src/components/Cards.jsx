import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import FeatureCard from './FeatureCard';

const Cards = () => {
    const allCards = [
        {icon   : icon1,
         title  : 'Declarative',
         desc   : 'React makes it painless to create interactive UIs.'
        },        
        {icon   : icon2,
         title  : 'Components',
         desc   : 'Build encapsulated components that manage their state.'
        },        
        {icon   : icon3,
         title  : 'Single-Way',
         desc   : 'Build encapsulated components that manage their state.'
        },        
        {icon   : icon4,
         title  : 'JSX',
         desc   : 'Build encapsulated components that manage their state.'
        }
    ];
    return (
        <div className="cards">
            {allCards.map((card) => {
                return (<FeatureCard icon={card.icon} title={card.title} desc={card.desc}/>)
            })}
        </div>
    )
}

export default Cards;