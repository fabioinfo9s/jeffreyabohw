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
})

router.post('/refresh', function (req, res) {
    res.status(200).send(req.user)
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
                        //save user_id
                        userData.id = userData._id
                        //save user
                        userData.save().then( resolve => {
                            res.status(200).send({ message: 'Registration successful!'}, resolve)
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

})

router.get('/verification/:token', function (req, res) {

})

router.post('/resend/verification', function (req, res) {

})

router.get('/resend/:email/verification', function (req, res) {

})

router.post('/password/forgot-password', function (req, res) {

})

router.post('/password/reset-password', function (req, res) {

})

module.exports = router;