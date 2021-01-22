var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema
var CategoriesSchema = require('../schema/CategoriesSchema');
var SkillSetsSchema = require('../schema/SkillSetsSchema');
var JobsSchema = require('../schema/JobsSchema');


// Routes

router.post('/category', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        CategoriesSchema.find({ data }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No results found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.post('/skills', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        SkillSetsSchema.find({ data }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No results found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.post('/search', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        JobsSchema.find({ data }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No results found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})


router.post('/nearby-jobs', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        JobsSchema.find({ data }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No results found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
         })
    }
})



module.exports = router;