 

  import React from "react";

  function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-6">
                <img
                  id="nav-img"
                  src="/src/assets/ironhack-logo-xs.png"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 text-end">
              <img
                  id="nav-img"
                  src="/src/assets/menu-top-xs.png"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;

