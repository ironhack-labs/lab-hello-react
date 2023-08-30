import './head.css'
import Nav from '../nav/nav'
import Button from '../button/button'

function Head () {
    return (
        <div className="header">
            <div>
                <Nav />
            </div>
            <div className="header-content">
                <div className="header-text">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                </div>
                <div className="header-btn">
                    < Button />
                </div>
            </div>
        </div>
    )
}

export default Head