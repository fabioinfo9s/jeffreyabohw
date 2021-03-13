var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Twilio = require('../config/twilio');

router.get('/sms/:country_code/:phone', function (req, res) {
    var phone = req.params.phone;
    var country_code = req.params.country_code;
    if (!phone || !country_code) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        Twilio.sendOTP(country_code, phone, (reject, resolve) => {
            if (reject) {
                return res.status(500).send(reject)
            }
            if (resolve) {
                return res.status(200).send(resolve)
            }
        })
    }
})

router.get('/email/:email', function (req, res) {
    var email = req.params.email;
    if (!email) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        return res.status(200).send({
            status: true,
            message: 'OTP sent succeessfully!',
            message_id: null,
            otp_code: otp,
        })
    }
})


module.exports = router;