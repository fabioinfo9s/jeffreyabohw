var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import Schema
var JobsSchema = require('../schema/JobsSchema');
var UsersSchema = require('../schema/UsersSchema');
var JobsRatingsSchema = require('../schema/JobRatingsSchema');
var ArtisanRatingsSchema = require('../schema/ArtisanRatingsSchema');
var ArtisanProfilesSchema = require('../schema/ArtisanProfilesSchema');
var PorposalsSchema = require('../schema/ProposalsSchema');
var ProposalsSchema = require('../schema/ProposalsSchema');
var JobAttachmentsSchema = require('../schema/JobAttachmentsSchema');



// Routes

router.get('/proposal', function (req, res) {
    var user_id;
    var type;
    if (!user_id || type != 'Employer') {
        res.status(500).send({ message: 'Unauthorized!' })
    } else {

    }
})

router.get('/employer/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).send({ message: 'Missing params!' })
    } else {
        UsersSchema.find({id: id, type: 'Employer'}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.post('/jobs/status/:id', function (req, res) {
    var data = req.body;
    var job_id = req.params.id;
    if (!job_id || !data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        JobsSchema.findOneAndUpdate({id: job_id}, {$set: data}, {new: true}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }
        })
    }
})

router.post('/government-id', function (req, res) {

})

router.get('/jobs', function (req, res) {

})

router.get('/job-offer/all', function (req, res) {
    var user_id;
    if (!user_id) {
        res.status(500).send({ message: 'Unauthorized!' })
    } else {
        JobsSchema.find({user_id: user_id}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send(resolve)
            }            
        })
    }
})

router.post('/employer-job-rating/:job_id', function (req, res) {
    var job_id = req.params.job_id;
    var data = req.body;
    if (!job_id) {
        res.status(500).send({ message: 'Missing params!' })
    } else {
        JobsRatingsSchema.findOneAndUpdate({job_id: job_id}, {$set: data}, {new: true}, function(reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                res.status(200).send({ message: 'Job rated!' })
            }              
        })
    }
})

router.post('/employer-artisan-job-rating', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        var postData = new ArtisanRatingsSchema( data )
        postData.save().then( resolve => {
            res.status(200).send({ message: 'Artisan rated!' })
        }, reject => {
            res.status(500).send(reject)
        })
    }
})

router.post('/category/distance', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        ArtisanProfilesSchema.find({ lat: data.lat, lng: data.lng, category_id: data.category_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No artisan around you!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }               
        })
    }
})

router.post('/distance', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        ArtisanProfilesSchema.find({ lat: data.lat, lng: data.lng }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No artisan around you!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }               
        })
    }
})

router.post('/get-artisan', function (req, res) {
    var data = req.body;
    if (!data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        ArtisanProfilesSchema.find({}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No artisan found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }               
        })
    }
})

router.get('/proposals/:count', function (req, res) {
    var user_id;
    var count = req.params.count;
    if (!count) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        ProposalsSchema.find({ employer_id: user_id }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No proposals found!' })
            }
            if (resolve) {
                res.status(200).send({ message: 'Latest proposals for employer: ' + resolve });
            }
        }).count(count)
    } 
})

router.get('/proposal/:proposal', function (req, res) {
    var proposal = req.params.proposal;
    if (!proposal) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        ProposalsSchema.find({ id: proposal }, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'No proposal found!' })
            }
            if (resolve) {
                res.status(200).send(resolve)
            }         
        })
    }
})

router.post('/proposal/accept', function (req, res) {
    var body = req.body;
    const jobData = {
        status: 'ongoing',
        job_assigned: 1,
        user_artisan_id: body.artisan_id
    };
    const proposalData = {
        approved: true
    }
    var job_id = body.job_id;
    var proposal_id = body.proposal_id;
    if (!job_id || !proposal_id) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        JobsSchema.findOneAndUpdate({ id: job_id }, {$set: jobData}, {new: true}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                ProposalsSchema.findOneAndUpdate({ id: proposal_id }, {$set: proposalData}, {new: true}, function (reject, resolve) {
                    if (reject) {
                        res.status(500).send(reject)
                    }
                    if (resolve) {
                        res.status(200).send({ message: 'Proposal accepted' })
                    }
                })
            }  
        })
    }
})

router.post('/proposal/reject', function (req, res) {
    var body = req.body;
    const jobData = {
        status: 'rejected',
        job_assigned: 0,
        user_artisan_id: body.artisan_id
    };
    const proposalData = {
        approved: false
    }
    var job_id = body.job_id;
    var proposal_id = body.proposal_id;
    if (!job_id || !proposal_id) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        JobsSchema.findOneAndUpdate({ id: job_id }, {$set: jobData}, {new: true}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (resolve) {
                ProposalsSchema.findOneAndUpdate({ id: proposal_id }, {$set: proposalData}, {new: true}, function (reject, resolve) {
                    if (reject) {
                        res.status(500).send(reject)
                    }
                    if (resolve) {
                        res.status(200).send({ message: 'Proposal rejected' })
                    }
                })
            }  
        })
    }
})

router.post('/job/attachment', function (req, res) {

})

router.post('/job/attachment/remove', function (req, res) {
    var data = req.body;
    var attachment_id = data.attachment_id;
    var job_id = data.job_id;
    if (!attachment_id || job_id) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {
        JobAttachmentsSchema.findOneAndDelete({id: attachment_id, job_id: job_id})
            .then(resolve => {
                if (!resolve) {
                    return res.status(404).send({ message: 'Attachment not found!' });
                } else {
                    return res.status(200).send({ message: 'Attachment successfully deleted' });
                }
            }, reject => {
                res.status(500).send(reject);
            })
    }
})

router.post('/milestone/create', function (req, res) {
    var user_id;
    var data = req.body;
    var job_id = data.job_id;
    if (!data) {
        res.status(500).send({ message: 'Missing params/body!' })
    } else {

    }
})

router.post('/milestone/delete', function (req, res) {

})

router.post('/milestone/complete', function (req, res) {

})

module.exports = router;