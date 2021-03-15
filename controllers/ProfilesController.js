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

// Expertise

router.get('/expertise', function (req, res, next) {
        ExpertiseSchema.find({}, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
})

router.get('/expertise/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        ExpertiseSchema.findOne({ user_id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Expertise profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.post('/expertise', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 6 || !postData.user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        ExpertiseSchema.findOne({ user_id: postData.user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                var data = new ExpertiseSchema( postData )
                data.id = data._id;
                data.save()
                .then( resolve => {
                    return res.status(200).send({ status: true, message: 'Successful', data: resolve })
                })
                .catch( reject => {
                    return res.status(500).send({ status: false, message: 'Connection error!' })
                })
            }
            if (resolve) {
                return res.status(500).send({ status: false, message: 'User already created an expertise profile!' })
            }
        })
    }
})

router.put('/expertise/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    var postData = req.body;
    if (Object.keys(postData).length < 5 || !user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        ExpertiseSchema.findOneAndUpdate({ user_id: user_id }, { $set: postData }, { new: true }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User expertise profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful!', data: resolve })
            }
        })
    }
})

// Education

router.get('/education', function (req, res, next) {
    EducationSchema.find({}, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/education/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        EducationSchema.findOne({ user_id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Education profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.post('/education', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 3 || !postData.user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        EducationSchema.findOne({ user_id: postData.user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                var data = new EducationSchema( postData )
                data.id = data._id;
                data.save()
                .then( resolve => {
                    return res.status(200).send({ status: true, message: 'Successful', data: resolve })
                })
                .catch( reject => {
                    return res.status(500).send({ status: false, message: 'Connection error!' })
                })
            }
            if (resolve) {
                return res.status(500).send({ status: false, message: 'User already created an education profile!' })
            }
        })
    }
})

router.put('/education/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    var postData = req.body;
    if (Object.keys(postData).length < 3 || !user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        EducationSchema.findOneAndUpdate({ user_id: user_id }, { $set: postData }, { new: true }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User education profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful!', data: resolve })
            }
        })
    }
})

// Employment

router.get('/employment', function (req, res, next) {
    EmploymentSchema.find({}, function(reject, resolve) {
        if (reject) {
            return res.status(500).send({ status: false, message: 'Connection error!' })
        }
        if (resolve) {
            return res.status(200).send({ status: true, message: 'Successful', data: resolve })
        }
    })
})

router.get('/employment/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        EmploymentSchema.findOne({ user_id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'Employment profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful', data: resolve })
            }
        })
    }
})

router.post('/employment', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 3 || !postData.user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        EmploymentSchema.findOne({ user_id: postData.user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                var data = new EmploymentSchema( postData )
                data.id = data._id;
                data.save()
                .then( resolve => {
                    return res.status(200).send({ status: true, message: 'Successful', data: resolve })
                })
                .catch( reject => {
                    return res.status(500).send({ status: false, message: 'Connection error!' })
                })
            }
            if (resolve) {
                return res.status(500).send({ status: false, message: 'User already created an employment profile!' })
            }
        })
    }
})

router.put('/employment/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    var postData = req.body;
    if (Object.keys(postData).length < 3 || !user_id || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        EmploymentSchema.findOneAndUpdate({ user_id: user_id }, { $set: postData }, { new: true }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User employment profile does not exist!' })
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Successful!', data: resolve })
            }
        })
    }
})

module.exports = router;