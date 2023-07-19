import menuIcon from '../images/menu-top-xs.png'

const Menu = () => {
  return (
    <div className="nav-item nav-link">
      <a href="/">
        <img src={menuIcon} className="menu-icon" alt="Menu-icon" width="30"/>
      </a>
    </div>
  )
}

export default Menu
