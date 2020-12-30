// app.js
var express = require('express');
var app = express();
//var db = require('./db');
var cors = require('cors');
var bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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
// var AuthController = require('./auth/AuthController');
// app.use('/api/v1/auth', AuthController);
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


module.exports = app;

