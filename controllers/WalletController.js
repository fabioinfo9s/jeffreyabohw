var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var WalletsSchema = require('../schema/WalletsSchema');

router.get('/balance/:user_id', function (req, res) {
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

module.exports = router;