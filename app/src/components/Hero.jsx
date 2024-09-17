import logoIcon from "../assets/ironhack-logo-xs.png";
import menuIcon from "../assets/menu-top-xs.png";
import Header from "../components/Header";

export default function Hero() {
  return (
    <div className="hero">
      <Header logoIcon={logoIcon} menuIcon={menuIcon} />
      <section className="hero-callout">
        <h1 className="hero-callout-title">Say hello to ReactJS</h1>
        <p className="hero-callout-text">
          You will learn how to use the most popuslar frontend library, and
          become a super Ninja developer.
        </p>
        <button className="btn-awesome">Awesome!</button>
      </section>
    </div>
  )
}