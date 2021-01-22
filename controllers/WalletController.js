var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema
var UserWalletsSchema = require('../schema/UserWalletsSchema');



// Routes

router.post('/pay', function (req, res) {

})

router.post('/transfer', function (req, res) {

})

router.post('/withdraw', function (req, res) {

})

router.get('/check', function (req, res) {
    var user_id;
    UserWalletsSchema.findOne({ user_id: user_id }, function (reject, resolve) {
        if (reject) {
            res.status(500).send(reject)
        }
        if (resolve) {
            res.status(200).send({ available_balance: resolve.available_balance })
        }
    })
})

router.post('/verify', function (req, res) {

})

module.exports = router;