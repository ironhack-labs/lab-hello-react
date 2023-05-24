import Card from './Card';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
function CardsContainer() {
  return (
    <div className='cardsContainer d-flex justify-content-evenly m-3 px-5'>
      <Card img={icon1} title="Declarative" text="React makes it painless to create interactive UIs" />
      <Card img={icon2} title="Components" text="Build encapsulated components that manage their state" />
      <Card img={icon3} title="Single-Way" text="A set of immutable values are passed to the component's" />
      <Card img={icon4} title="JSX" text="Statically-typed, designed ttu run on modern browsers" />
    </div>
  )
}

export default CardsContainer