// ArtisanController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var artisanSchema = require('../../schema/ArtisanSchema');


// Update artisan profile
router.put('/artisan-profile/:id', (req, res) => {
    const user_id = req.params.id;

});


module.exports = router;