function Header() {
    return <div className="header bg-secondary text-light" style={{ width:'60rem', height:'23rem', margin:'30px'}}>
        <div className="d-flex justify-content-between" style={{ margin:'10px', marginTop:'20px'}}>
        <img className="nav-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt=".." />
        <img className="nav-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt=".." />
        </div>
        <div className="d-flex-cl justify-content" style={{ flexGrow:'1', flexShrink:'1', margin:'30px', width:'20rem'}}>
        <h1>SAY HELLO TO REACTJS</h1>
        <p >You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className="btn btn-light">Awesome!</button>
        </div>
    </div>
}

export default Header