var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var JobOffersSchema = require('../schema/JobOffersSchema');

router.post('/add', function (req, res) {
    var postData = req.body;
    if (Object.keys(postData).length < 1 || !postData.project_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var jobOffersData = new JobOffersSchema( postData );
        jobOffersData.id = jobOffersData._id;
        jobOffersData.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Job offer created successfully!', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

router.get('/status/:status/:user_id', function (req, res) {
    var status = req.params.status;
    var user_id = req.params.user_id;
    if (!status || !user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        JobOffersSchema.find({ user_id: user_id, status: status }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.delete('/:offer_id', function (req, res) {
    var offer_id = req.params.offer_id;
    JobOffersSchema.findOneAndDelete({ id: offer_id })
    .then( resolve => {
		if (!resolve) {
			return res.status(404).send({ status: false, message: 'Unable to delete!' })
		} else {
			return res.status(200).send({ status: true, message: 'Item deleted successfully!' })
		}
	})
    .catch( reject => {
		return res.status(500).send({ status: false, message: 'Connection error!' })
	})
})

module.exports = router;