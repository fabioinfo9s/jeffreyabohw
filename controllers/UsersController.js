var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Twilio = require('../config/twilio');
var UsersSchema = require('../schema/UsersSchema');


router.get('/', function (req, res, next) {
    UsersSchema.find({}, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/:phone', function (req, res, next) {
    var phone = req.params.phone;
    if (!phone) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        UsersSchema.findOne({ phone: phone }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Phone does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.post('/', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 6 || !postData.email || !postData.password || !postData.phone || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var data = new UsersSchema( postData )
        data.id = data._id;
        data.password = Buffer.from(postData.password).toString('base64');
        data.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

module.exports = router;