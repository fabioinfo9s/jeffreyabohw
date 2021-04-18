var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var ProposalsSchema = require('../schema/ProposalsSchema');

router.post('/add', function (req, res) {
    var postData = req.body;
    if (Object.keys(postData).length < 1 || !postData.project_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var proposalsData = new ProposalsSchema( postData );
        proposalsData.id = proposalsData._id;
        proposalsData.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Proposal created successfully!', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

router.get('/all/:role/:project_id', function (req, res) {
    var role = req.params.role;
    var project_id = req.params.project_id;
    if (Object.keys(postData).length < 2 || !role || !project_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        ProposalsSchema.find({ project_id: project_id, role: role }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.get('/artisan/:user_id', function (req, res) {
    var user_id = req.params.user_id;
    ProposalsSchema.find({ artisan_id: user_id }, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/protisan/:user_id', function (req, res) {
    var user_id = req.params.user_id;
    ProposalsSchema.find({ protisan_id: user_id }, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

module.exports = router;