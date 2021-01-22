var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema
var ProposalsSchema = require('../schema/ProposalsSchema');
var JobOffersSchema = require('../schema/JobOffersSchema');
var UsersSchema = require('../schema/UsersSchema');
var ArtisanRatingsSchema = require('../schema/ArtisanRatingsSchema');
var JobsSchema = require('../schema/JobsSchema');
var WalletTransactionsSchema = require('../schema/WalletTransactionsSchema');



router.post('/proposal', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Empty/Incorrect body request!' })
    } else {
        ProposalsSchema.findOne({ job_id: data.job_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                var postData = new ProposalsSchema( data )
                postData.save().then( resolve => {
                    res.status(200).send({ message: 'Proposal successfully created' })
                }, reject => {
                    res.status(500).send(reject)
                })
            }
            if (resolve) {
                res.status(409).send('Proposal already exists!')
            }
        })
    }
})

router.get('/proposal', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        ProposalsSchema.find({ artisan_id: user_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No proposals found!' });
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.get('/proposal/:id', function (req, res) {
    var job_id = req.params.id;
    if (!job_id) {
        res.status(500).send({ message: 'Missing params' })
    } else {
        ProposalsSchema.findOne({ job_id: job_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No proposals found' });
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.put('/proposal/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send({ message: 'Missing params' })
    } else {
        ProposalsSchema.findOneAndUpdate({id: id}, {$set: req.body}, {new: true}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.get('/offers', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        JobOffersSchema.find({ user_artisan_id: user_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.put('/offers/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send({ message: 'Missing params!' })
    } else {
        JobOffersSchema.findOneAndUpdate({id: id}, {$set: req.body}, {new: true}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.delete('/offers/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send({ message: 'Missing params!' })
    } else {
        JobOffersSchema.findOneAndDelete({id: id})
        .then(resolve => {
            if (!resolve) {
                return res.status(404).send({ message: 'Offer not found!' });
            } else {
                return res.status(200).send({ message: 'Offer declined' });
            }
        }, reject => {
            res.status(500).send(reject);
        })
    }
})

router.get('/artisan-job-offer', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        JobOffersSchema.find({ user_artisan_id: user_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.post('/artisan-job-offer/accept', function (req, res) {
    var user_id;
    var type;
    if (!user_id || type) {
        res.status(500).send({ message: 'Unauthorized!' })
    } else {

    }
})

router.post('/artisan-job-offer/decline', function (req, res) {
    var user_id;
    var type;
    if (!user_id || type) {
        res.status(500).send({ message: 'Unauthorized!' })
    } else {

    }
})

router.get('/artisan/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send('Missing params!')
    } else {
        UsersSchema.findOne({id: id, type: 'Artisan'}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }        
        })
    }
})

router.get('/ratings', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        ArtisanRatingsSchema.findOne({artisan_id: id}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send({
                    data: {
                        average_rating: resolve.average_rating || 3,
                        quality: resolve.quality || 3,
                        job_success: resolve.job_success || 60,
                        availability: resolve.availability || 80,
                        artisan_rating: resolve.artisan_rating || 3,
                    }
                })
            }               
        })
    }
})

router.get('/reviews', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        ArtisanRatingsSchema.findOne({artisan_id: user_id}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.get('/jobs/:status', function (req, res) {
    var status = req.params.status;
    if (!status) {
        res.status(500).send('Missing params!')
    } else {
        JobsSchema.find({status: status}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'You have no ' + status + ' job' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }        
        })
    }
})

router.get('/schedule', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        JobsSchema.find({user_artisan_id: user_id}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send({
                    data: {
                        id: resolve.id,
                        title: resolve.title,
                        description: resolve.description,
                        start_date: resolve.start_date,
                        end_date: resolve.end_date
                    }
                })
            }
        })
    }
})

router.get('/earnings', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        JobsSchema.find({user_artisan_id: user_id}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve) 
            }           
        })
    }
})

router.get('/job-insight', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'User not logged in!' })
    } else {
        var totalJobs = JobsSchema.find({user_artisan_id: user_id}, function (reject, resolve) {}).count();
        var jobInvites = JobOffersSchema.find({user_artisan_id: user_id}, function (reject, resolve) {}).count();
        var completedJobs = JobsSchema.find({user_artisan_id: user_id, status: 'completed'}, function (reject, resolve) {}).count();
        var jobSuccessRate = Number(completedJobs) / Number(totalJobs);
        res.status(200).send({
            data: {
                totalJobs: totalJobs,
                jobInvites: jobInvites,
                completedJobs: completedJobs,
                jobSuccessRate: jobSuccessRate
            }
        })
    }
})

module.exports = router;