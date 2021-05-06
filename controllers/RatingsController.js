var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var RatingsSchema = require('../schema/RatingsSchema');

router.post('/add', function (req, res) {
    var postData = req.body;
    if (Object.keys(postData).length < 1 || !postData.user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var ratingsData = new RatingsSchema( postData );
        ratingsData.id = ratingsData._id;
        ratingsData.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Rating created successfully!', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

router.get('/:user_id', function (req, res) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        RatingsSchema.find({ user_id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.get('/project/:project_id', function (req, res) {
    var project_id = req.params.project_id;
    if (!project_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        RatingsSchema.find({ project_id: project_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})


module.exports = router;