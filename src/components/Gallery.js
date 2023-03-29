// React Component <Gallery />
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import Card from '../components/Card';

function Gallery() {
  const cards = [
    {
      imageUrl: icon1,
      title: 'Declarative',
      description: 'React makes it painless to create interactive UIs.',
    },
    {
      imageUrl: icon2,
      title: 'Components',
      description: 'Build encapsulated components that manage their state.',
    },
    {
      imageUrl: icon3,
      title: 'Single-Way',
      description: 'A set of immutable values are passed to the components.',
    },
    {
      imageUrl: icon4,
      title: 'JSX',
      description: 'Statically-typed designed to run on modern browsers.',
    },
  ];

  return (
    <div className='gallery'>
      {cards.map((card) => {
        return (
          <Card
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            key={card.title}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
