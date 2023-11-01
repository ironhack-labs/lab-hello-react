function Nav(props) {
  return (
    <div className="NavBar">
      <a
        href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.ironhackLogo} className="logo" alt="Ironhack logo" />
      </a>
      <a
        href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.topMenu} className="logo menu" alt="TopMenu" />
      </a>
    </div>
  );
}
export default Nav;
