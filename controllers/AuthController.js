var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var bcrypt = require('bcrypt');
const passport = require('passport');
var cloudinary = require('../config/cloudinary');
var fs = require('fs');


// Import Schema
var UsersSchema = require('../schema/UsersSchema');
var CategoriesSchema = require('../schema/CategoriesSchema');
var EmployerProfilesSchema = require('../schema/EmployerProfilesSchema');
var EducationalBackgroundSchema = require('../schema/EducationalBackgroundSchema');
var UserExpertisesSchema = require('../schema/UserExpertisesSchema');
var UserRatesSchema = require('../schema/UserRatesSchema');
var UserPortfoliosSchema = require('../schema/UserPortfoliosSchema');
var UserProfileVideosSchema = require('../schema/UserProfileVideosSchema');
var SkillSetsSchema = require('../schema/SkillSetsSchema');
var UserLinksSchema = require('../schema/UserLinksSchema');


// Routes

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return res.status(500).send(err); }
        if (!user) { return res.status(404).send({ message: 'Wrong emal/password combination!' }); }
        req.logIn(user, function(reject) {
          if (reject) { 
              return res.status(500).send(err); 
            }
          return res.status(200).send({ token: user.token, id: user.id})
        });
      })(req, res, next);
})

router.post('/logout', function (req, res) {
    req.logout();
    res.status(200).send({ message: 'Logout successful!' })
})

router.post('/refresh', function (req, res) {
    req.logout();
    res.status(200).send({ message: 'Logout successful!' })
})

router.post('/signup', function (req, res) {
    var data = req.body;
    var email = data.email;
    var password = data.password;
    if (!email || !password) {
        res.status(500).send({ message: 'Email & password required!'})
    } else {
        UsersSchema.findOne({ email: email }, function (reject, resolve) {
            if (reject) {
                res.status(500).send({ message: 'Error!' })
            }
            if (resolve) {
                //auto login user
                passport.authenticate('local', function(err, user, info) {
                    if (err) { 
                        return res.status(500).send(err); 
                    }
                    if (!user) { 
                        return res.status(404).send({ message: 'Wrong emal/password combination!' }); 
                    }
                    req.logIn(user, function(reject) {
                        if (reject) { 
                            return res.status(500).send(err); 
                        }
                        //upload avatar
                        if (data.avatar) {
                            var base64String = data.avatar;
                            cloudinary.decodeBase64(base64String, (url) => {
                                if (url) {
                                    cloudinary.uploadImage(url, (secure_url) => {
                                        if (secure_url) {
                                            const postData = {
                                                avatar: secure_url,
                                            }
                                            UsersSchema.findOneAndUpdate({id: user.id}, {$set: postData}, {new: true})
                                                .then( resolve => {
                                                    return res.status(200).send({ token: user.token, id: user.id })
                                                }, reject => {
                                                    return res.status(500).send({ message: 'Error saving avatar! Try again' })
                                            })
                                        }
                                    })
                                }
                            })
                        }
                        // Category
                        if (data.category_id) {
                            var categoryData = new CategoriesSchema( data )
                            var id = categoryData._id;
                            categoryData.id = id;
                            categoryData.user_id = user.id;
                            categoryData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Employment
                        if (data.employment) {
                            var employmentData = new EmployerProfilesSchema( data )
                            var id = employmentData._id;
                            employmentData.id = id;
                            employmentData.user_id = user.id;
                            employmentData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Education
                        if (data.education) {
                            var educationData = new EducationalBackgroundSchema( data )
                            var id = educationData._id;
                            educationData.id = id;
                            educationData.user_id = user.id;
                            educationData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Expertise
                        if (data.expertise) {
                            var expertiseData = new UserExpertisesSchema( data )
                            var id = expertiseData._id;
                            expertiseData.id = id;
                            expertiseData.user_id = user.id;
                            expertiseData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Rates
                        if (data.rates) {
                            var ratesData = new UserRatesSchema( data )
                            var id = ratesData._id;
                            ratesData.id = id;
                            ratesData.user_id = user.id;
                            ratesData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Portfolio
                        if (data.portfolio) {
                            var base64String = data.portfolio;
                            cloudinary.decodeBase64(base64String, (url) => {
                                if (url) {
                                    cloudinary.uploadImage(url, (secure_url) => {
                                        if (secure_url) {
                                            const postData = {
                                                portfolio: secure_url
                                            }
                                            var portfolioData = new UserPortfoliosSchema ( postData )
                                            var id = portfolioData._id;
                                            portfolioData.id = id;
                                            portfolioData.user_id = user.id;
                                            portfolioData.save()
                                            .then( resolve => {
                                                return res.status(200).send({ token: user.token, id: user.id})
                                            }, reject => {
                                                return res.status(500).send({ message: 'Error!' })
                                            })
                                        }
                                    })
                                }
                            })
                        }
                        // Profile Video
                        if (data.profile_video) {
                            var video = __dirname + '/'
                            cloudinary.uploadVideo(video, (url) => {
                                console.log(url)
                            })
                        }
                        // Skills
                        if (data.skills) {
                            var skillsData = new SkillSetsSchema( data )
                            var id = skillsData._id;
                            skillsData.id = id;
                            skillsData.user_id = user.id;
                            skillsData.skill_set_id = id;
                            skillsData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        // Links
                        if (data.links) {
                            var linksData = new UserLinksSchema( data )
                            var id = linksData._id;
                            linksData.id = id;
                            linksData.user_id = user.id;
                            linksData.save().then( resolve => {
                                return res.status(200).send({ token: user.token, id: user.id})
                            }, reject => {
                                return res.status(500).send({ message: 'Unknown error!' })
                            })
                        }
                        
                    });
                })(req, res);
            }
            if (!resolve) {
                // User
                var userData = new UsersSchema( data )
                bcrypt.genSalt(10,(err, salt)=> 
                bcrypt.hash(userData.password, salt,
                    (err, hash)=> {
                        if(err) throw err;
                        //save pass to hash
                        userData.password = hash;
                        var id = userData._id;
                        userData.id = id;
                        //save user
                        userData.save().then( resolve => {
                            //auto login user
                            passport.authenticate('local', function(err, user, info) {
                                if (err) { return res.status(500).send(err); }
                                if (!user) { return res.status(404).send({ message: 'Wrong emal/password combination!' }); }
                                req.logIn(user, function(reject) {
                                  if (reject) { 
                                      return res.status(500).send(err); 
                                    }
                                  return res.status(200).send({ token: user.token, id: user.id})
                                });
                              })(req, res);
                        }, reject => {
                            res.status(500).send({ message: 'Error!' })
                        })
                    })
                );         
            }
        })
    }
})

router.post('/change/password', function (req, res) {
    var data = req.body;
    var newPassword = data.password;
    if (!req.user) {
        res.status(401).send({ message: 'Unauthorized' })
    } else {
        bcrypt.genSalt(10,(err, salt)=> 
                bcrypt.hash(newPassword, salt,
                    (err, hash)=> {
                        if(err) throw err;
                        var user_id = req.user.id;
                        const postData = {
                            password: hash
                        }
                        UsersSchema.findOneAndUpdate({id: user_id}, {$set: postData}, {new: true})
                        .then( resolve => {
                            res.status(200).send({ message: 'Your password has been change!' })
                        }, reject => {
                            res.status(500).send(reject)
                        })
                    })
        )
    }
})

router.get('/verification/:token', function (req, res) {
    var token = req.params.token;
    if (!token) {
        res.status(500).send({ message: 'Missing or invalid params/body!' })
    } else {
        UsersSchema.findOne({ remember_token: token}, function (reject, resolve) {
            if (reject) {
                res.status(500).send(reject)
            }
            if (!resolve) {
                res.status(404).send({ message: 'User not found!' })
            }
            if (resolve) {
                var user_id = resolve.id;
                const postData = {
                    remember_token: null,
                    email_verified_at: Date.now
                }
                UsersSchema.findOneAndUpdate({id: user_id}, {$set: postData}, {new: true})
                .then( resolve => {
                    res.status(200).send({ message: 'Your account has been verified successfully' })
                }, reject => {
                    res.status(500).send({ message: 'Error!' })
                })
            }
        })
    }
})

router.post('/resend/verification', function (req, res) {

})

router.get('/resend/:email/verification', function (req, res) {

})

router.post('/password/forgot-password', function (req, res) {

})

router.post('/password/reset-password', function (req, res) {
    var data = req.body;
    var password = data.password;
    var token = data.token;
    var email = data.email;
    if (!password || !email || !token) {
        res.status(500).send({ message: 'Missing or invalid params/body!' })
    } else {
        bcrypt.genSalt(10,(err, salt)=> 
                bcrypt.hash(password, salt,
                    (err, hash)=> {
                        if(err) throw err;
                        const postData = {
                            password: hash
                        }
                        UsersSchema.findOneAndUpdate({email: email}, {$set: postData}, {new: true})
                        .then( resolve => {
                            res.status(200).send({ message: 'Password reset successfully!' })
                        }, reject => {
                            res.status(500).send(reject)
                        })
                    })
        )
    }
})


router.get('/upload', function(req, res) {
    var base64String = req.body;
    cloudinary.decodeBase64(base64String, (url) => {
        if (url) {
            cloudinary.uploadImage(url, (secure_url) => {
                if (secure_url) {
                    console.log(secure_url)
                }
            })
        }
    })
});


module.exports = router;