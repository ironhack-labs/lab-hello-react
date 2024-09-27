import Card from './Card';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Gallery() {
    return (
      <div className="Gallery">
        <Card
          src={icon1}
          title="Declarative"
          par="React makes it painles to create interactive UIs."
        />
        <Card
          src={icon2}
          title="Components"
          par="Build encapsulated components that manage their state."
        />
        <Card
          src={icon3}
          title="Single-Way"
          par="A set of immutable values are passed to the components."
        />
        <Card
          src={icon4}
          title="JSX"
          par="Statically -typed, design to run on modern broswers."
        />
      </div>
    );
}

export default Gallery;