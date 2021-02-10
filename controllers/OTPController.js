var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Twilio = require('../config/twilio');
var OTPSchema = requir('../schema/OTPSchema');
var UsersSchema = require('../schema/UsersSchema');



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

router.post('/verify-otp', function (req, res, next) {
    var phone = req.body.phone;
    var otp = req.body.code;
    if (!phone) {
        return res.status(500).send({ messsage: 'Phone number missing!' })
    }
    if (!otp) {
        return res.status(500).send({ message: 'OTP missing!' })
    }
    OTPSchema.findOne({ value: otp }, function (reject, resolve) {
        if (reject) {
            res.status(500).send(reject)
        }
        if (resolve) {
            const postData = {
                phone_verified_at: Date.now
            }
            UsersSchema.findOneAndUpdate({ phone: phone }, {$set: postData}, {new: true}, function (reject, resolve) {
                if (reject) {
                    res.status(500).send({ message: 'Error!' })
                }
                if (resolve) {
                    res.status(200).send({ message: 'Phone verified successfully!' })
                }
            })
        }
        if (!resolve) {
            res.status(404).send({ message: 'OTP not valid, Try again!' })
        }
    })
})



module.exports = router;