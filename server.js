var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

require("./public/assignment/server-app.js")(app);

// server running config
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// allow cookie
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

app.use(cookieParser());

// app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(session({
    secret : 'this is the secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());

process.env.FACEBOOK_CLIENT_ID = "1160462874039122";
process.env.FACEBOOK_CLIENT_SECRET = "15c262a0e9a630837af21b71ef44fcfb";
process.env.FACEBOOK_CALLBACK_URL = "www.baidu.coms";



var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
};

// start running server
app.listen(port, ipaddress);