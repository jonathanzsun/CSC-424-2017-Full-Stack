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
        <title>Sun Customers</title>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nemo maxime non minima, voluptatum numquam? Ad, quis accusantium sunt quae placeat corporis nostrum cum numquam, tempore sapiente alias quidem illum!</p>
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
        <section className="section-steps clear-fix" id="works">
          <div className="row">
            <h2>How it works – Simple as 1, 2, 3</h2> </div>
          <div className="row">
            <div className="col span-1-of-2 steps-box clearfix"> <img src="resources/img/app-iPhone.png" alt="Omnifood app on iPhone" className="app-screen js--wp-2" /> </div>
            <div className="col span-1-of-2 steps-box clearfix">
              <div className="works-step">
                <div>1</div>
                <p>Sign up to deliver through this website, or our apps!</p>
              </div>
              <div className="works-step">
                <div>2</div>
                <p>Meet one of our partner drivers and drop off your package.</p>
              </div>
              <div className="works-step">
                <div>3</div>
                <p>Your package will be delivered in a short time afterwards!</p>
              </div>
              <a href="#" className="btn-app"><img src="resources/img/download-app.svg" alt="App Store Button" /></a>
              <a href="#" className="btn-app"><img src="resources/img/download-app-android.png" alt="Play Store Button" /></a>
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