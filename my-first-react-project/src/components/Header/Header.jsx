import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='header-content'>
                <h1>
                    Say Hello to<br />ReactJS
                </h1>
                <p>
                    You will learn how to use<br />the most popular frontend library,<br />and become a super Ninja developer.
                </p>
                <button>Awesome!</button>
            </div>
        </header>
    )

}

export default Header