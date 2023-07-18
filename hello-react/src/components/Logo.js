import ironhackLogo from '../images/ironhack-logo-xs.png'

const Logo = () => { 
  return (
    <div className="navbar-brand">
      <img
        src={ironhackLogo}
        className="app-logo"
        alt="app-logo"
        width="50"
      />
    </div>
  )
}

export default Logo