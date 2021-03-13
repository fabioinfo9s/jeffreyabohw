// app.js
var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors');
var bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')
//const session = require('express-session');
var session = require('cookie-session');
const passport = require('passport');
require('../config/passport')(passport)

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//express session
app.use(session ({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

// CORNS configuration starts

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // authorized headers for preflight requests
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    app.options('*', (req, res) => {
        // allowed XHR methods 
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

// CORNS configuration ends


// Express mailer views config

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


var AuthenticationController = require('../controllers/AuthenticationController');
app.use('/api/v1/auth', AuthenticationController);
var OTPController = require('../controllers/OTPController');
app.use('/api/v1/otp', OTPController);
var UsersController = require('../controllers/UsersController');
app.use('/api/v1/users', UsersController);
var ProfilesController = require('../controllers/ProfilesController');
app.use('/api/v1/profiles', ProfilesController);


module.exports = app;

