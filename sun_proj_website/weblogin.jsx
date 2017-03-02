var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="description" content="Sun Project customer page placeholder." />
        <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="vendors/css/grid.css" />
        <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.min.css" />
        <link rel="stylesheet" type="text/css" href="vendors/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/style.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/queries.css" />
        <title>Sun Drivers</title>
        <meta name="theme-color" content="#ffffff" /> 
        <div className="customer-nav">
          <nav>
            <div className="row"> <img src="resources/img/logo.png" alt="Sun Project logo" className="logo" />
              <ul className="main-nav js--main-nav">
                <li><a href="index.html">Sun Project</a></li>
                <li><a href="customer.html">Customers</a></li>
                <li><a href="drivers.html">Drivers</a></li>
                <li><a href="cities.html">Cities</a></li>
                <li><a href="login.html">Login</a></li>
              </ul> <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round" /></a> </div>
          </nav>
        </div>
        <section className="need_space">
          <div className="row">
            <h3>This row has some descriptive text about the spring semester class of CSC 424</h3> </div>
        </section>
        <section className="credits">
          <div className="row">
            <h2>Project Manager: Dr. Sun</h2>
            <div className="col span-1-of-3">
              <h2>Frontend:</h2>
              <ul>
                <li>
                  <h4>Mike</h4></li>
                <li>Charles</li>
                <li>Thomas</li>
                <li>Ty</li>
                <li>Dale</li>
                <li>Alec</li>
                <li>Brandon</li>
                <li>Robert</li>
              </ul>
            </div>
            <div className="col span-1-of-3">
              <h2>Backend:</h2>
              <ul>
                <li>
                  <h4>Jimmy</h4></li>
                <li>Trevor</li>
                <li>Michael</li>
                <li>Josh</li>
                <li>Nathan</li>
                <li>Jake</li>
              </ul>
            </div>
            <div className="col span-1-of-3">
              <h2>Database:</h2>
              <ul>
                <li>
                  <h4>Derek</h4></li>
                <li>Fracis</li>
                <li>Devon</li>
                <li>Morgan</li>
                <li>Jimmy</li>
                <li>Colton</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section-footer">
          <footer>
            <div className="row">
              <div className="col span-1-of-2">
                <ul className="footer-nav">
                  <li><a href="about.html">About us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">iOS App</a></li>
                  <li><a href="#">Android App</a></li>
                </ul>
              </div>
              <div className="col span-1-of-2">
                <ul className="social-icons">
                  <li><a href="#"><i className="ion-social-facebook" /></a></li>
                  <li><a href="#"><i className="ion-social-twitter" /></a></li>
                  <li><a href="#"><i className="ion-social-googleplus" /></a></li>
                  <li><a href="#"><i className="ion-social-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <p> Copyright © 2016 by CSC 424. All rights reserved </p>
            </div>
          </footer>
        </section>
      </div>
    );
  }
});