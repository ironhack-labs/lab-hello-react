import reactOne from '../images/react1.png';
import reactTwo from '../images/react2.png';

function Header() {
  return (
    <div>
      <nav>
        <img src={reactOne} alt='first logo' />
        <img src={reactTwo} alt='second logo' />
      </nav>

      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </div>
  );
}

export default Header;
