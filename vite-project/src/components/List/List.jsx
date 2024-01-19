import './List.css'
const headingElement1 = 'Declarative'
const headingElement2 = 'Components'
const headingElement3 = 'Single-Way'
const headingElement4 = 'JSX'
const textElement1 = 'React makes it painless to create interactive UIs.'
const textElement2 = 'Build encapsulate components that manage their state.'
const textElement3 = 'A set of immutable values are passed to the components.'
const textElement4 = 'Statically-typed, designed to run on moder browsers.'
import element1 from '../../assets/icon1.png'
import element2 from '../../assets/icon2.png'
import element3 from '../../assets/icon3.png'
import element4 from '../../assets/icon4.png'





const List = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3 column">
                <div><img src={element1} alt="icono" /></div>
                    <h2>{headingElement1}</h2>
                    <p>{textElement1}</p>
                </div>
                <div className="col-12 col-md-3 column">
                <div><img src={element2} alt="logo" /></div>
                    <h2>{headingElement2}</h2>
                    <p>{textElement2}</p>
                </div>
                <div className="col-12 col-md-3 column">
                <div><img src={element3} alt="logo" /></div>
                    <h2>{headingElement3}</h2>
                    <p>{textElement3}</p>
                </div>
                <div className="col-12 col-md-3 column">
                <div><img src={element4} alt="logo" /></div>
                    <h2>{headingElement4}</h2>
                    <p>{textElement4}</p>
                </div>
            </div>
        </div>
    );
}

export default List;