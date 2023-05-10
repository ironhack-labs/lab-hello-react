import Card from './Card';

import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'


function Section(){
  return(
    <section className='section-2'>
      <Card imgUrl={icon1} heading="Declarative" text="React makes it painless to create interactive UIs"/>
      <Card imgUrl={icon2} heading="Components" text="Build ecapsulated components that manage their state."/>
      <Card imgUrl={icon3} heading="Single-Way" text="A set of immutable values are passed to the components."/>
      <Card imgUrl={icon4} heading="JSX" text="Statically-typed designed to run on modern browsers."/>

    </section>
  )
}
export default Section