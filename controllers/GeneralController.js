var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema




// Routes

router.get('/bank-list', function (req, res) {

})

router.post('/resolve-account', function (req, res) {

})


module.exports = router;