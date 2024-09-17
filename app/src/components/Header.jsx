export default function Header({ logoIcon, menuIcon }) {
  return (
    <header className="hero-header">
      <div>
        <img src={logoIcon} alt="IronHack" />
      </div>
      <div>
        <img src={menuIcon} alt="Hamburger" />
      </div>
    </header>
  );
}
