import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import Feature from "./Feature";

const featuresList = [
    {
        id: 1,
        title: 'Declarative',
        src: icon1,
        content: 'React makes it painless to create interactive UIs.'
    },
    {
        id: 2,
        title: 'Components',
        src: icon2,
        content: 'Build encapsulated components that manage their state.'
    },
    {
        id: 3,
        title: 'Single-Way',
        src: icon3,
        content: 'A set of immutable value are passed to the component\'s.'
    },
    {
        id: 4,
        title: 'JSX',
        src: icon4,
        content: 'Statically-typed designed to run on modern browsers.'
    }
]

function Features() {
    return (
        <div className="features">
            { featuresList.map(feature => <Feature key={ feature.id } data={ feature } /> )}
        </div>
    );
}

export default Features;