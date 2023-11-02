import Paragraph from "./Paragraph";

function Card(props) {
  return (
    <>
      <section className="white-background" id="general-information">
        <article className="Card">
          <a
            href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={props.declarativeLogo}
              style={{ width: "100px" }}
              className="logo declarative"
              alt="logo declarative"
            />
          </a>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive USi</p>
        </article>

        <article className="Card">
          <a
            href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={props.ComponentLogo}
              style={{ width: "100px" }}
              className="logo components"
              alt="logo components"
            />
          </a>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </article>

        <article className="Card">
          <a
            href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={props.SingleWayLogo}
              style={{ width: "100px" }}
              className="logo Single-Way"
              alt="logo Single-Way"
            />
          </a>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </article>

        <article className="Card">
          <a
            href="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={props.JSXLogo}
              style={{ width: "100px" }}
              className="logo JSX"
              alt="logo JSX"
            />
          </a>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </section>
    </>
  );
}
export default Card;
