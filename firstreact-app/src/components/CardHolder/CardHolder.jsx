import ReactCard from "../ReactCard/ReactCard";
import DeclarativeLogo from '../Images/declarative_logo.png';
import ComponentsLogo from '../Images/components_logo.png';
import SingleWayLogo from '../Images/singleway_logo.png';
import JSXLogo from '../Images/jsx_logo.png';
import { v4 as uuidv4 } from 'uuid';

function CardHolder(){
    const data = [
        {src: DeclarativeLogo, title: 'Declarative', description: 'React Makes it painlessto create interactive UIs'},
        {src: ComponentsLogo, title: 'Components', description: 'Build encapsulated components'},
        {src: SingleWayLogo, title: 'Single-Way', description: 'A set of immutable values are passed to the components.'},
        {src: JSXLogo, title: 'JSX', description: 'Statically-typed, designed to run on modern browsers.'},

    ]
    return(
        <div>
            {data.map((card) => {
                return <ReactCard key={uuidv4()} src={card.src} title={card.title} description={card.description} />
            })}
        </div>

    );
}


export default CardHolder;