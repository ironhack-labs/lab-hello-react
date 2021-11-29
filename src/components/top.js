import Head from "./head";

function Top() {
  return (
    <div className="Top">
      <Head />

      <div className="main">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>

        <a href="/blank">
          <button> Awesome! </button>
        </a>
      </div>
    </div>
  );
}

export default Top;
