var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Twilio = require('../config/twilio');




router.get('/new-phone-number', function (req, res, next) {
    var phone = req.body.phone;
    if (!phone) {
        res.status(500).send({ message: 'Missing/invalid params!' })
    } else {
        Twilio.sendOTP(phone, (reject, resolve) => {
            if (reject) {
                return res.status(500).send({ message: 'Error sending OTP, Try again later!' })
            }
            if (resolve) {
                return res.status(200).send({ message: 'OTP sent successfully to ' + phone })
            }
        })
    }
})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})


module.exports = router;