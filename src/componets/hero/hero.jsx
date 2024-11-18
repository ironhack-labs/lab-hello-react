
const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become a super Ninja developer.
      </p>
      <button style={styles.button}>Awesome!</button>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#282c34',
    color: '#fff',
  },
  button: {
    marginTop: '1rem',
    padding: '1rem 2rem',
    fontSize: '1rem',
    color: '#282c34',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Hero;
