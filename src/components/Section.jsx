import Card from './Card';
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import Icon4 from '../images/icon4.png';

const text1 = 'React makes it painless to create interactive UIs.';
const text2 = 'Build encapsulated components that manage their state.';
const text3 = 'A set of immutable values are passed to the components';
const text4 = 'Statically-typed, designed to run on modern browsers.';

function Section() {
  return (
    <section>
      <Card img={Icon1} heading="Declaritive" text={text1} />
      <Card img={Icon2} heading="Components" text={text2} />
      <Card img={Icon3} heading="Single-Way" text={text3} />
      <Card img={Icon4} heading="JSX" text={text4} />
    </section>
  );
}
export default Section;
