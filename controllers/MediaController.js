var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema


// Routes

router.post('/upload-avatar', function (req, res) {
   
})



module.exports = router;