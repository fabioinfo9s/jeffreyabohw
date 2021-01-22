var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema
var CategorySchema = require('../schema/CategoriesSchema');
var SkillSetsSchema = require('../schema/SkillSetsSchema');


// Routes

router.get('/all', function (req, res) {
        CategorySchema.find({}, function (reject, resolve) {
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
})

router.get('/skills', function (req, res) {
    SkillSetsSchema.find({}, function (reject, resolve) {
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
})

router.get('/category-skills/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send('Empty/Incorrect id!')
    } else {
        SkillSetsSchema.find({ category_id: id }, function (reject, resolve) {
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

router.get('/change-case', function (req, res) {
    
})



module.exports = router;