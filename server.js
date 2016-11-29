var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

// server running config
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// allow cookie and session
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

app.use(cookieParser());


app.use(session( process.env.SESSION_SECRET
                    || { secret : 'this is the secret',
                        resave : true,
                        saveUninitialized : true}));
app.use(passport.initialize());
app.use(passport.session());



// start running server
require("./public/assignment/server-app.js")(app);
app.listen(port, ipaddress);