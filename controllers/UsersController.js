var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Twilio = require('../config/twilio');
var UsersSchema = require('../schema/UsersSchema');
var ExpertiseSchema = require('../schema/ExpertiseSchema');
var EducationSchema = require('../schema/EducationSchema');
var EmploymentSchema = require('../schema/EmploymentSchema');


router.get('/', function (req, res, next) {
    UsersSchema.find({}, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/:phone', function (req, res, next) {
    var phone = req.params.phone;
    if (!phone) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        UsersSchema.findOne({ phone: phone }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Phone does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.post('/', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 6 || !postData.email || !postData.password || !postData.phone || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var data = new UsersSchema( postData )
        data.id = data._id;
        data.password = Buffer.from(postData.password).toString('base64');
        data.save()
        .then( resolve => {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        })
        .catch( reject => {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        })
    }
})

router.get('/profile/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        UsersSchema.findOne({ id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Unable to locate people within your location!' })
            }
            if (resolve) {
                var user = resolve;
                ExpertiseSchema.findOne({ user_id: user_id }, function(reject, resolve) {
                    if (reject) {
                        return res.status(500).send({ status: false, message: 'Connection error!' })
                    }
                    if (!resolve) {
                        return res.status(200).send({ status: true, message: 'Successful', user })
                    }
                    if (resolve) {
                        var expertise = resolve;
                        EducationSchema.findOne({ user_id: user_id }, function(reject, resolve) {
                            if (reject) {
                                return res.status(500).send({ status: false, message: 'Connection error!' })
                            }
                            if (!resolve) {
                                return res.status(200).send({ status: true, message: 'Successful', user, expertise })
                            }
                            if (resolve) {
                                var education = resolve;
                                EmploymentSchema.findOne({ user_id: user_id }, function(reject, resolve) {
                                    if (reject) {
                                        return res.status(500).send({ status: false, message: 'Connection error!' })
                                    }
                                    if (!resolve) {
                                        return res.status(200).send({ status: true, message: 'Successful', user, expertise, education })
                                    }
                                    if (resolve) {
                                        var employment = resolve;
                                        return res.status(200).send({ status: true, message: 'Successful', user, expertise, education, employment })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

router.get('/find/:role/:longitude/:latitude', function (req, res, next) {
    var role = req.params.role;
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    if (!radius || !longitude || !latitude) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        const location = { type: 'Point', coordinates: [longitude, latitude] };
        UsersSchema.findOne({
            location: {
              $geoIntersects: { $geometry: location }
            },
            role: role
          }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Unable to locate people within your location!' })
            }
            if (resolve) {
                var user = resolve;
                ExpertiseSchema.findOne({ user_id: user.user_id }, function(reject, resolve) {
                    if (reject) {
                        return res.status(500).send({ status: false, message: 'Connection error!' })
                    }
                    if (!resolve) {
                        return res.status(200).send({ status: true, message: 'Successful', user })
                    }
                    if (resolve) {
                        var expertise = resolve;
                        EducationSchema.findOne({ user_id: user.user_id }, function(reject, resolve) {
                            if (reject) {
                                return res.status(500).send({ status: false, message: 'Connection error!' })
                            }
                            if (!resolve) {
                                return res.status(200).send({ status: true, message: 'Successful', user, expertise })
                            }
                            if (resolve) {
                                var education = resolve;
                                EmploymentSchema.findOne({ user_id: user.user_id }, function(reject, resolve) {
                                    if (reject) {
                                        return res.status(500).send({ status: false, message: 'Connection error!' })
                                    }
                                    if (!resolve) {
                                        return res.status(200).send({ status: true, message: 'Successful', user, expertise, education })
                                    }
                                    if (resolve) {
                                        var employment = resolve;
                                        return res.status(200).send({ status: true, message: 'Successful', user, expertise, education, employment })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

module.exports = router;