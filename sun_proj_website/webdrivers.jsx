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
            <h3>Section 1 header</h3> </div>
          <div className="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur consectetur id deleniti molestias iure reprehenderit optio, debitis voluptatum temporibus aspernatur! Dolorem nesciunt est distinctio harum accusamus optio praesentium nam delectus?</p>
          </div>
        </section>
        <section className="need_space">
          <div className="row">
            <h3>Section 2 header</h3> </div>
          <div className="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur consectetur id deleniti molestias iure reprehenderit optio, debitis voluptatum temporibus aspernatur! Dolorem nesciunt est distinctio harum accusamus optio praesentium nam delectus?</p>
          </div>
        </section>
        <section className="need_space">
          <div className="row">
            <h3>Section 3 header</h3> </div>
          <div className="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur consectetur id deleniti molestias iure reprehenderit optio, debitis voluptatum temporibus aspernatur! Dolorem nesciunt est distinctio harum accusamus optio praesentium nam delectus?</p>
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