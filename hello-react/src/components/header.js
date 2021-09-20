import React from 'react';

export function Header(props) {
  return (
    <header className='bg-color-dark'>
      <div className='container'>
        <nav className='navbar navbar-light'>
          <div className='container-fluid'>
            <a className='navbar-brand'>
              <img src={props.logoImg} className='logo' alt='logo' />
            </a>
            <img src={props.menuImg} className='logo' alt='logo' />
          </div>
        </nav>
      </div>
    </header>
  );
}
