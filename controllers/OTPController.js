var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Twilio = require('../config/twilio');




router.post('/new-phone-number', function (req, res, next) {
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

router.post('/new-phone-number-reset', function (req, res, next) {
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

router.post('/forgot-password-number', function (req, res, next) {
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

router.post('/forgot-password-number-resend', function (req, res, next) {
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

router.post('/reset-phone-number', function (req, res, next) {
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

router.post('/reset-phone-number-resend', function (req, res, next) {
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

router.get('/verify-otp', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})


module.exports = router;