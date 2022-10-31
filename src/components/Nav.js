import Logo1 from '../images/logonav.png'
import Logo2 from '../images/logo2nav.png'

function Nav() {

    return(
        <nav style={{display: "flex", justifyContent:"space-between", margin: "0 50px 0 50px"}}>
        <img src={Logo1} alt="" width="70px"/>
        <img src={Logo2} alt="" width="70px"/>
      </nav>
    )
}

export default Nav