
import ironhackLogo from '../../assets/images/ironhack-logo-xs.png';



const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>IRONHACK</div>
      <button style={styles.menuButton}>☰</button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: '#fff',
  },
  logo: {
    fontWeight: 'bold',
  },
  menuButton: {
    fontSize: '1.5rem',
    background: 'none',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
