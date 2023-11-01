function Nav(props) {
  <div>
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
      <img src={props.topMenu} className="menu" alt="TopMenu" />
    </a>
  </div>;
}
export default Nav;
