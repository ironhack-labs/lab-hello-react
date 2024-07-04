import menu_top_xs from "../assets/menu-top-xs.png";

export default function Header() {
  const logo =
    "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png";

  return (
    <div className="bg-[#1f2535] min-h-56 p-8 text-white">
      <section id="navbar" className="flex flex-row justify-between items-center mb-16;">
        <img src={logo} alt="" />
        <img src={menu_top_xs} alt="" />
      </section>
      <section id="cta" className="flex flex-col items-start">
        <h1 className="font-bold text-6xl">
          Say hello to
          <br /> React.js
        </h1>
        <p className="mt-4 mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam beatae
          voluptas natus ea labore a!
        </p>
        <button className="mt-4 bg-white text-blue-900 rounded p-4 font-bold">
          Awesome!
        </button>
      </section>
    </div>
  );
}
