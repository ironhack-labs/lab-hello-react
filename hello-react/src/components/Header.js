function Header() {
  return (
    <header className='App-header'>
      <nav className='menu'>
        <ul className='navlist'>
          <li className='navitem'>
            <a href='/'>
              <img
                src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png'
                alt='ironhack'
              />
            </a>
          </li>
          <li className={["navitem", "burger"]}>
            <a href='/'>
              <img
                src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png'
                alt='burger'
              />
            </a>
          </li>
        </ul>
      </nav>
      <h1 className='title'>Say hello to ReactJS</h1>
      <p className='description'>
        You will learn how to use the most popular frontend library, and become
        a super ninja developer.
      </p>
      <button className='btn-awesome'>Awesome!</button>
    </header>
  );
}

export default Header;
