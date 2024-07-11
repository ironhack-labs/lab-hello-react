export default function Header() {
  const logo = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png";
  const menu_top_xs = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png";

  return (
    <div className="bg-indigo-950 min-h-56 p-12 text-white">
      <section 
        id="navbar"
        className="flex flex-row justify-between items-center m-16"
      >
        <img src={logo} alt="logo" />
        <img src={menu_top_xs} alt="menu" />
      </section>
      <section id="cta" className="flex flex-col items-start mt-4">
        <h1 className="text-4xl font-bold">Say hello to <br />ReactJS</h1>
        <p className="mt-4">You will learn how to use <br />the most popular frontend library <br />and become a super Ninja developer</p>
        <button className="mt-4 bg-white text-blue-900 py-2 px-4 rounded">Awesome</button>
      </section>
    </div>
  );
}
