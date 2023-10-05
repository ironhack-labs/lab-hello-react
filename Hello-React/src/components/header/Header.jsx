import './header.css'

function Header({ logo, menu, title, intro, button}){

  return <div className='header-body'>
    <div className='Navbar'>

      <img src={logo} alt="" />
      <img  className='menu-icon' src={menu} alt="" />

    </div>
      
    <div className='header-intro m-5'>
      <h1 className="header-title">{title}</h1>
      <p className="header-text">{intro}</p>
      <button className='header-button btn btn-primary'> {button} </button>
    </div>
      

  </div>

}

export default Header;