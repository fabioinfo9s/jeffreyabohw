var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var WalletsSchema = require('../schema/WalletsSchema');

router.get('/balance/:user_id', function (req, res) {
    var user_id = req.params.user_id;
    WalletsSchema.findOne({ user_id: user_id }, function (reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (!resolve) {
            return res.status(404).send({ status: false, message: 'User wallet information does not exist!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.post('/withdrawal/:user_id', function (req, res) {
    var postData = req.body;
    var user_id = req.params.user_id;
    if (Object.keys(postData).length < 2 || !user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload or params!' })
    } else {

    }
})

router.post('/topup/:user_id', function (req, res) {
    var postData = req.body;
    var user_id = req.params.user_id;
    if (Object.keys(postData).length < 2 || !user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload or params!' })
    } else {

    }
})

module.exports = router;