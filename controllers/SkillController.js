var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var SkillSetsSchema = require('../schema/SkillSetsSchema');


router.post('/search', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        SkillSetsSchema.find({ data }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject);
            }
            if (!resolve) {
                res.status(404).send({ message: 'No match found!' });
            }
            if (resolve) {
                res.status(200).send(resolve);
            }
        })
    }
})



module.exports = router;