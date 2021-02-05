// app.js
var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors');
var bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')
const session = require('express-session');
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

// BASIC AUTHENTICATION

// app.use(basicAuth({
//     users: { 'ethion': 'ethiontechnologies1%ETH1%' }
// }))

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

// ROUTES STARTS

// var ArtisanController = require('./artisan/ArtisanController');
// app.use('/api/v1/artisan', ArtisanController);
// var ArtisanController = require('./artisan/ArtisanController');
// app.use('/api/v1/professional', ArtisanController);
//var AuthController = require('../controllers/AuthController');
//app.use('/api/v1/auth', AuthController);
// var BillingController = require('./billing/BillingController');
// app.use('/api/v1/billing-address', BillingController);
// var JobCategoryController = require('./category/JobCategoryController');
// app.use('/api/v1/category', JobCategoryController);
// var EmployerController = require('./employer/EmployerController');
// app.use('/api/v1/employer', EmployerController);
// var BusinessController = require('./employer/BusinessController');
// app.use('/api/v1/employer/business-address', BusinessController);
// var GeneralController = require('./general/GeneralController');
// app.use('/api/v1/general', GeneralController);
// var LocationController = require('./location/LocationController');
// app.use('/api/v1/locaion', LocationController);
// var OTPController = require('./otp/OTPController');
// app.use('/api/v1/otp', OTPController);
// var MediaController = require('./media/MediaController');
// app.use('/api/v1/media', MediaController);
// var VideoController = require('./video/VideoController');
// app.use('/api/v1/video-upload', VideoController);
// var WalletController = require('./wallet/WalletController');
// app.use('/api/v1/wallet-fund', WalletController);

// ROUTES ENDS

// //  OTP
var OTPController = require('../controllers/OTPController');
app.use('/api/v1/otp', OTPController);

// SKILLS
var SkillController = require('../controllers/SkillController');
app.use('/api/v1/skills', SkillController);

// JOBS
var JobsController = require('../controllers/JobsController');
app.use('/api/v1/jobs', JobsController);

// // BILLING
// var BillingAddressController = require('../controllers/BillingAddressController');
// app.use('/api/vi/billing-address', BillingAddressController);

// // LOCATION
// var LocationController = require('../controllers/LocationController');
// app.use('/api/v1/location', LocationController);

// CATEGORY
var CategoryController = require('../controllers/CategoryController');
app.use('/api/v1/category', CategoryController);

// MEDIA
var MediaController = require('../controllers/MediaController');
app.use('/api/v1/media', MediaController);

// GENERAL
var GeneralController = require('../controllers/GeneralController');
app.use('/api/v1/general', GeneralController);

// WALLET
var WalletController = require('../controllers/WalletController');
app.use('/api/v1/wallet', WalletController);

// AUTH
var AuthController = require('../controllers/AuthController');
app.use('/api/v1/auth', AuthController);

// ARTISAN
var ArtisanController = require('../controllers/ArtisanController');
app.use('/api/v1/artisan', ArtisanController);

// EMPLOYER
var EmployerController = require('../controllers/EmployerController');
app.use('/api/v1/employer', EmployerController);

// // PROFESSIONAL
// var ProfessionalController = require('../controllers/ProfessionalController');
// app.use('/api/v1/professional', ProfessionalController);



module.exports = app;

