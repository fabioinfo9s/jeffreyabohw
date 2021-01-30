var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var bcrypt = require('bcrypt');
const passport = require('passport');


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
                res.status(500).send({ message: 'User already exists!' })
            }
            if (!resolve) {
                // Category
                var categoryData = new CategoriesSchema( data )
                categoryData.save();
                // Employment
                var employmentData = new EmployerProfilesSchema( data )
                employmentData.save();
                // Education
                var educationData = new EducationalBackgroundSchema( data )
                educationData.save();
                // Expertise
                var expertiseData = new UserExpertisesSchema( data )
                expertiseData.save();
                // Rates
                var ratesData = new UserRatesSchema( data )
                ratesData.save();
                // Portfolio

                // Profile Video
                
                // Skills
                var skillsData = new SkillSetsSchema( data )
                skillsData.save();
                // Links
                var linksData = new UserLinksSchema( data )
                linksData.save();
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

module.exports = router;