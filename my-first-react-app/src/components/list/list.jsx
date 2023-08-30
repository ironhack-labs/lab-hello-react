import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import ListItem from '../list-item/list-item';
import './list.css'

const texts = [
    {image: icon1, title: 'Declarative', paragraph: 'React makes it painless to create interactive UIs.'},
    {image: icon2, title: 'Components', paragraph: 'Build encapsulated components that manage their state.'},
    {image: icon3, title: 'Single-Way', paragraph: 'A set of inmutable values are passed to the components.'},
    {image: icon4, title: 'JSX', paragraph: 'Statically-typed, designed to run on modern browsers.'}

]

function List () {
    return (
            <div className="boxes-content">
                {texts.map((content) => (
                    <ListItem image={content.image} title={content.title} paragraph={content.paragraph} key={content.title} />
                ))}
            </div>
    )
}

export default List