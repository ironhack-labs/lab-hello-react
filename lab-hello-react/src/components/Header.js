/* --------------------------- */
/* Import components           */
/* --------------------------- */

import Navbar       from "./Navbar";
import Headline     from "./Headline";
import Subheadline  from "./Subheadline";
import Button       from "./Button";

/* --------------------------- */
/* React Component <Header />  */
/* --------------------------- */

function Header() {
    return (
        <div id="header">
            <Navbar />
            <Headline />
            <Subheadline/>
            <Button />
        </div>
    );
}

export default Header;