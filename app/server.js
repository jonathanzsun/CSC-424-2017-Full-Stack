/**
 * Created by Trevor on 2/18/2017.
 */

// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');




// configuration ===============================================================
  mongoose.connect(configDB.url); // connect to our database

require('./config/passport.js')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
//app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs'); // set up ejs for templating


app.use(express.static(__dirname + '/public')); //load public dir for use

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//C:\Users\Trevor\WebstormProjects\app\models\routes.js


// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
