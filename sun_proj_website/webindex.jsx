var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* initial-scale tells mobile devices to start at 1.0 scale */}
        <meta name="description" content="Sun Project is a premium package delivery service that allows individuals to deliver packages enroute to their destinations." />
        <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css" />
        {/* */}
        <link rel="stylesheet" type="text/css" href="vendors/css/grid.css" />
        {/* */}
        <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.min.css" />
        {/* */}
        <link rel="stylesheet" type="text/css" href="vendors/css/animate.css" />
        {/* */}
        <link rel="stylesheet" type="text/css" href="resources/css/style.css" />
        {/* */}
        <link rel="stylesheet" type="text/css" href="resources/css/queries.css" />
        {/* */}
        <link href="https://fonts.googleapis.com/css?family=Lato:400,100,300,300italic" rel="stylesheet" type="text/css" />
        {/* */}
        <title>Sun Project</title>
        <meta name="theme-color" content="#ffffff" /> 
        <header>
          <nav>
            <div className="row" role="banner">
              <ul className="main-nav js--main-nav">
                <div className="col">
                  <li>
                    <img src="resources/img/logo.png" alt="Sun Project logo" className="logo" />
                  </li></div>
                <div className="col span-2-of-3 main-links">
                  <li><a href="index.html">Sun Project</a></li>
                  <li><a href="customer.html">Customers</a></li>
                  <li><a href="drivers.html">Drivers</a></li>
                  <li><a href="cities.html">Cities</a></li>
                  <li><a>stuff</a></li>
                  {/* <li><a href="../ts_node/app/views/login.ejs" >Login</a></li></div> */}
                </div></ul></div>
          </nav>
          <div className="hero-text-box">
            <h1>Tired of Expensive Delivery Companies?<br />Hello "Uber" for Packages.</h1> <a className="btn btn-full js--scroll-to-plan" href="#">I love saving money</a> <a className="btn btn-ghost js--scroll-to-start" href="#">Show me more</a> </div>
        </header>
        <section className="section-features js--section-features" id="features">
          <div className="row">
            <h2>Deliver on your time — while not paying Fedex a dime.</h2>
            <p className="long-copy">Descriptive overview text goes here</p>
          </div>
          <div className="row js--wp-1">
            <div className="col span-1-of-4 box"> <i className="ion-ios-infinite-outline icon-big" />
              <h3>Up to 365 days/year</h3>
              <p>Marketing goes here too</p>
            </div>
            <div className="col span-1-of-4 box"> <i className="ion-ios-stopwatch-outline icon-big" />
              <h3>Agree on time/place to meet our drivers</h3>
              <p>Don't worry, its safe</p>
            </div>
            <div className="col span-1-of-4 box"> <i className="ion-ios-nutrition-outline icon-big" />
              <h3>100% organic</h3>
              <p>Thats right</p>
            </div>
            <div className="col span-1-of-4 box"> <i className="ion-ios-cart-outline icon-big" />
              <h3>Ship anything</h3>
              <p>unless its illegal, below this line will be pictures of food. I ran out of time to find some good pictures to illustrate shipping packages</p>
            </div>
          </div>
        </section>
        {/*<section class="section-meals">
        <ul class="meals-showcase clearfix">
            <li>
                <figure class="meal-photo"> <img src="resources/img/2.jpg" alt="something"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/3.jpg" alt="Chicken breast steak with vegetables"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/4.jpg" alt="Autumn pumpkin soup"> </figure>
            </li>
        </ul>
        <ul class="meals-showcase clearfix">
            <li>
                <figure class="meal-photo"> <img src="resources/img/5.jpg" alt="Paleo beef steak with vegetables"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/6.jpg" alt="Healthy baguette with egg and vegetables"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/7.jpg" alt="Burger with cheddar and bacon"> </figure>
            </li>
            <li>
                <figure class="meal-photo"> <img src="resources/img/8.jpg" alt="Granola with cherries and strawberries"> </figure>
            </li>
        </ul>
    </section> */}
        <section className="section-testimonials">
          <div className="row">
            <h2>Our customers can't live without us</h2> </div>
          <div className="row">
            <div className="col span-1-of-3">
              <blockquote> Sun Project is just awesome! I just launched a startup which leaves me with no time for UPS, so Sun Project is a life-saver. Now that I got used to it, I couldn't live without my daily deliveries! <cite><img src="resources/img/customer-1.jpg" alt="Alberto Duncan" />Alberto Duncan</cite> </blockquote>
            </div>
            <div className="col span-1-of-3">
              <blockquote> Inexpensive, healthy and fun. We have lots of food delivery here in Hattiesburg, but no one comes even close to Sun Project. Me and my family are so in love! <cite><img src="resources/img/customer-2.jpg" alt="Joana Silva" />Joana Silva</cite> </blockquote>
            </div>
            <div className="col span-1-of-3">
              <blockquote> I was looking for a quick and easy delivery service in San Franciso. I tried a lot of them and ended up with Sun Project. Best delivery service in the Bay Area. Keep up the great work! <cite><img src="resources/img/customer-3.jpg" alt="Milton Chapman" />Milton Chapman</cite> </blockquote>
            </div>
          </div>
        </section>
        <section className="section-plans js--section-plans" id="plans">
          <div className="row">
            <h2>Start shipping today</h2> </div>
          <div className="row">
            <div className="col span-1-of-3">
              <div className="plan-box js--wp-4">
                <div>
                  <h3>Premium</h3>
                  <p className="plan-price">$399 <span>/ month</span></p>
                  <p className="plan-price-meal">That's only 13.30$ per delivery per day</p>
                </div>
                <div>
                  <ul>
                    <li><i className="ion-ios-checkmark-empty icon-small" />1 delivery every day</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />Order 24/7</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />Access to best drivers</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />fast delivery</li>
                  </ul>
                </div>
                <div> <a href="#" className="btn btn-full">Sign up now</a> </div>
              </div>
            </div>
            <div className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>Pro</h3>
                  <p className="plan-price">$149 <span>/ month</span></p>
                  <p className="plan-price-meal">That's only 14.90$ per delivery</p>
                </div>
                <div>
                  <ul>
                    <li><i className="ion-ios-checkmark-empty icon-small" />1 delivery 10 days/month</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />Order 24/7</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />Access to newest drivers</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />quick delivery</li>
                  </ul>
                </div>
                <div> <a href="#" className="btn btn-ghost">Sign up now</a> </div>
              </div>
            </div>
            <div className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>Starter</h3>
                  <p className="plan-price">$19 <span>/ month</span></p>
                  <p className="plan-price-meal">&nbsp;</p>
                </div>
                <div>
                  <ul>
                    <li><i className="ion-ios-checkmark-empty icon-small" />1 delivery</li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />Order from 8 am to 12 pm</li>
                    <li><i className="ion-ios-close-empty icon-small" /></li>
                    <li><i className="ion-ios-checkmark-empty icon-small" />speedy delivery</li>
                  </ul>
                </div>
                <div> <a href="#" className="btn btn-ghost">Sign up now</a> </div>
              </div>
            </div>
          </div>
        </section>
        <div className="map-box">
          <div className="map" />
          <div className="form-box">
            <div className="row">
              <h2>We're happy to hear from you</h2> </div>
            <div className="row">
              <form method="post" action="#" className="contact-form">
                <div className="row">
                  <div className="col span-1-of-3">
                    <label htmlFor="name">Name</label>
                    {/* for is used to link the id tag, 3 lines down */}
                  </div>
                  <div className="col span-2-of-3">
                    <input name="name" id="name" placeholder="Your name" required type="text" /> </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input name="email" id="email" placeholder="Your email" required type="email" />
                    {/* placeholder puts a placeholder text in a box */}
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label htmlFor="find-us">How did you find us?</label>
                  </div>
                  <div className="col span-2-of-3">
                    <select name="find-us" id="find-us">
                      <option value="friends" selected>Friends</option>
                      <option value="search">Search engine</option>
                      <option value="ad">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>Newsletter?</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input name="news" id="news" defaultChecked type="checkbox" /> Yes, please </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>Drop us a line</label>
                  </div>
                  <div className="col span-2-of-3">
                    <textarea name="message" placeholder="Your message" defaultValue={""} />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>&nbsp;</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input defaultValue="Send it!" type="submit" /> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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