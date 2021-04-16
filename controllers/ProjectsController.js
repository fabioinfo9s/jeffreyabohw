var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var ProjectsSchema = require('../schema/ProjectsSchema');

router.post('/add', function (req, res) {
    var postData = req.body;
    if (Object.keys(postData).length < 2 || !postData.user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var projectsData = new ProjectsSchema( postData );
        projectsData.id = projectsData._id;
        projectsData.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Project created successfully!', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

router.get('/:project_id', function (req, res) {
    var project_id = req.params.project_id;
    ProjectsSchema.findOne({ id: project_id }, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/user/:user_id', function (req, res) {
    var user_id = req.params.user_id;
    ProjectsSchema.find({ user_id: user_id }, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/find/:longitude/:latitude', function (req, res) {
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    if (!latitude || !longitude) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        const location = { type: 'Point', coordinates: [longitude, latitude] };
        ProjectsSchema.findOne({
            location: {
              $geoIntersects: { $geometry: location }
            },
          }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Unable to find projects within your location!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }

        })
    }
})

router.get('/all/:type/:user_id', function (req, res) {
    var type = req.params.type;
    var user_id = req.params.user_id;
    if (!type || !user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        ProjectsSchema.find({ user_id: user_id, type: type }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.get('/status/:status/:user_id', function (req, res) {
    var status = req.params.status;
    var user_id = req.params.user_id;
    if (!status || !user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        ProjectsSchema.find({ user_id: user_id, status: status }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.delete('/:project_id', function (req, res) {
    var project_id = req.params.project_id;
    ProjectsSchema.findOneAndDelete({ id: project_id })
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