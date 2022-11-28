import styled from 'styled-components';

function Homepage({ imgs }) {
  return (
    <Wrapper>
      <section className='upper-section'>
        <nav>
          <img src={imgs[0]} alt='logo' />
          <img className='menu' src={imgs[1]} alt='menu' />
        </nav>
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer!
          </p>
          <button>Awesome!</button>
        </div>
      </section>
      <section className='lower-section'>
        <div className='divs'>
          <div className='div'>
            <img src={imgs[2]} alt='declarative' />
            <div className='text'>
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs</p>
            </div>
          </div>
          <div className='div'>
            <img src={imgs[3]} alt='components' />
            <div className='text'>
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state</p>
            </div>
          </div>
          <div className='div'>
            <img src={imgs[4]} alt='single-way' />
            <div className='text'>
              <h2>Single-Way</h2>
              <p>A set of immutable values is passe dto the components</p>
            </div>
          </div>
          <div className='div'>
            <img src={imgs[5]} alt='jsx' />
            <div className='text'>
              <h2>JSX</h2>
              <p>Statically typed. DEsigned to run on modern browsers</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Homepage;

const Wrapper = styled.main`
  .upper-section {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 20px 40px 0 40px;
    height: 65vh;
    background: #000;
    color: #fff;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
  }
  nav .menu {
    height: 25%;
    width: 20px;
  }
  .upper-section h1 {
    font-size: 70px;
    width: 350px;
    margin-bottom: 20px;
  }
  .upper-section p {
    width: 300px;
    margin-bottom: 40px;
  }
  .upper-section button {
    width: 110px;
    height: 40px;
    font-weight: 700;
    border: none;
    border-radius: 3px;
  }
  .lower-section {
    height: 35vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lower-section .divs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 75%;
  }
  .lower-section .div {
    height: 100%;
    width: 20%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .lower-section .div img {
    width: 90px;
    height: 90px;
  }

  .lower-section .text {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 7px;
  }
`;
