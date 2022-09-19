import './menu.css'
import Image from '../Image/image'

function Menu () {
    return (
        <div className="menu">
            <div className="container">
                <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="xx" />
                <h3>Declaratives</h3>
                <p>React makes it painless to create intercative UIs.</p>
            </div>
            <div className="container">
                <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="components" />
                <h3>Components</h3>
                <p>React makes it painless to create intercative UIs.</p>
            </div>
            <div className="container">
                <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="single-way" />
                <h3>Single-Way</h3>
                <p>React makes it painless to create intercative UIs.</p>
            </div>
            <div className="container">
                <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="jsx" />
                <h3>JSX</h3>
                <p>React makes it painless to create intercative UIs.</p>
            </div>
        </div>
    )
}

export default Menu