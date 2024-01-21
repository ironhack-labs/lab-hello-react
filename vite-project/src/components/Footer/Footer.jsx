function Footer() {
    return (
      <section className="d-flex justify-content-around mt-5">
        <div>
       <img src="../src/assets/icon1.png"/>
       <h4>Declarative</h4>
       <p className="black">React makes it painless to create interactive UI</p>
       </div>
       <div>
       <img src="../src/assets/icon2.png"/>
       <h4>Components</h4>
       <p className="black">Build encapsulated components that manage their state.</p>
       </div> 
       <div>
       <img src="../src/assets/icon3.png"/>
       <h4>Single-Way</h4>
       <p className="black">A set immutable values are passed to the components.</p>
       </div> 
       <div>
       <img src="../src/assets/icon4.png"/>
       <h4>JSX</h4>
       <p className="black">Statically-typed designed to run on modern browsers.</p>
       </div>
      </section>
    );
  }
   
  export default Footer;