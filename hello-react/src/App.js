import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menuBurger from './images/menu-burguer.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'



function App() {
	return (
		<div className="container">
			<header className="header">
				<div className="header-images">
					<img src={logo} alt="ironhack logo"/>
					<a href="/">
						<img src={menuBurger} alt="menu" id="image-burguer"/>
					</a>
				</div>
				<div className="header-content">
					<h1 className="header-H1">Say hello to ReactJS</h1>
					  <p className="header-text">
						  You will learn how to use
                <br/>
                  the most popular frontend library,
                  <br/>
                    and become a super Ninja developer.
				  	</p>
					<a className="header-button" href="/">
						Awesome!
					</a>
				</div>
			</header>
			  <section className="section">
				  <div>
					  <img src={icon1} alt="declarative logo"/>
					    <h2 className="column-info-h2"> Declarative</h2>
					      <p className="column-text">
						      React makes it
                  <br/> 
                    painless to create
                  <br/> 
                      interactive UIs
					        </p>
				    </div>
				<div>
					<img src={icon2} alt="components logo"/>
					  <h2 className="column-info-h2">Components</h2>
					    <p className="column-text">
						    Build encapsulated
                  <br/> 
                components that
                  <br/> 
                manage their state.
					    </p>
				</div>
				<div>
					<img src={icon3} alt="singleway logo"/>
					  <h2 className="column-info-h2">Single-Way</h2>
					    <p className="column-text">
						    A set of immutable
              <br/>
                values are passed to
              <br/> 
                the component's.
					    </p>
				</div>
          <div>
            <img src={icon4} alt="JSX logo"/>
              <h2 className="column-info-h2">JSX</h2>
                <p className="column-text">
                  Statically-typed,
                  <br/> 
                  designed to run on
                  <br/> 
                  modern browsers.
                </p>
          </div>
			</section>
		</div>
	);
}


export default App;