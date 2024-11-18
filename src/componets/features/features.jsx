

// Importar los iconos
// Importar los iconos
import icon1 from "@/assets/images/icon1.png";
import icon2 from "@/assets/images/icon2.png";
import icon3 from "@/assets/images/icon3.png";
import icon4 from "@/assets/images/icon4.png";

  

const FeaturesComponent = () => {
    const featuresData= [
        {
            icon: icon1,
            title: 'Declarative',
            description: 'React makes it painless to create interactive UIs.',
          },
          {
            icon: icon2,
            title: 'Components',
            description: 'Build encapsulated components that manage their state.',
          },
          {
            icon: icon3,
            title: 'Single-Way',
            description: 'A set of immutable values are passed to the component’s.',
          },
          {
            icon: icon4,
            title: 'JSX',
            description: 'Statically-typed, designed to run on modern browsers.',
          },
        ];
  return (
    <section style={styles.container}>
      {featuresData.map((feature, index) => (
        <div key={index} style={styles.feature}>
          <img src={feature.icon} alt={feature.title} style={styles.icon} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem',
    backgroundColor: '#fff',
  },
  feature: {
    textAlign: 'center',
    maxWidth: '200px',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '1rem',
  },
};

export default FeaturesComponent;
