import './FeatureList.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import Feature from '../Feature/Feature';

function FeatureList() {

    const features = [
        {
            image: icon1,
            title: 'Declaraive',
            description: 'React makes it painless to create interactive UIs.'
        },
        {
            image: icon2,
            title: 'Components',
            description: 'Build encapsulated components that manage their state.'
        },
        {
            image: icon3,
            title: 'Single-way',
            description: 'A set of inmutable values are passed to the components.'
        },
        {
            image: icon4,
            title: 'JSX',
            description: 'Statically-typed designed to run on modern browsers.'
        }
    ];

    return (
        <div className='feature-list'>
            {features.map((feature) => (
                <Feature image={feature.image} title={feature.title} description={feature.description} key={feature.title}/>
            ))}
        </div>
    )
}

export default FeatureList