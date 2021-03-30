var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var UsersSchema = require('../schema/UsersSchema');
const passport = require('passport');
var Twilio = require('../config/twilio');
var walletsService = require('../services/WalletsService');

router.post('/register', function (req, res, next) {
    var postData = req.body;
    var phone = postData.phone;
    var country_code = postData.country_code;
    if (Object.keys(postData).length < 3 || !postData.phone || !postData.role || !postData.country_code) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        UsersSchema.findOne({ phone: phone }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                var data = new UsersSchema( postData )
                data.id = data._id;
                data.token = generateToken(30);
                data.save()
                .then( resolve => {
                        var user = resolve;
                        walletsService.createUserWallet(user.id, (reject, resolve) => {
                            if (reject) {
                                return res.status(500).send(reject)
                            }
                            if (resolve) {
                                var wallet = resolve;
                                Twilio.sendOTP(country_code, phone, (reject, resolve) => {
                                    if (reject) {
                                        return res.status(500).send(reject)
                                    }
                                    if (resolve) {
                                        return res.status(200).send({ status: true, message: 'Registration created!', user: user, otp: resolve, wallet: wallet })
                                    }
                                })
                            }
                        })
                    })
                    .catch( reject => {
                        return res.status(500).send({ status: false, message: 'Connection error!' })
                    })
            }
            if (resolve) {
                return res.status(500).send({ status: false, message: 'User already exists!' })
            }
        })
    }
})

router.put('/register', function (req, res, next) {
    var postData = req.body;
    if (Object.keys(postData).length < 4 || !postData.email || !postData.password || !postData.phone || !postData.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        postData.email = postData.email.toLocaleLowerCase();
        postData.password = Buffer.from(postData.password).toString('base64');
        UsersSchema.findOne({ email: postData.email }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                UsersSchema.findOneAndUpdate({ phone: postData.phone }, { $set: postData }, { new: true }, function(reject, resolve) {
                    if (reject) {
                        return res.status(500).send({ status: false, message: 'Connection error!' })
                    }
                    if (!resolve) {
                        return res.status(500).send({ status: false, message: 'User does not exist!' })
                    }
                    if (resolve) {
                       req.logIn(resolve, function(reject) {
                         if (reject) { 
                            req.logout();
                            return res.status(500).send(reject);  
                         }
                         return res.status(200).send({ status: true, message: 'Registration completed!', data: resolve });
                       })
                    }
                })
            }
            if (resolve) {
                return res.status(500).send({ status: false, message: 'Email already exist!' })
            }
        })
    }
})

// router.post('/register', function (req, res, next) {
//     var postData = req.body;
//     if (Object.keys(postData).length < 6 || !postData.email || !postData.password || !postData.phone || !postData.role) {
//         return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
//     } else {
//         var email = postData.email.toLocaleLowerCase();
//         UsersSchema.findOne({ email: email }, function(reject, resolve) {
//             if (reject) {
//                 return res.status(500).send({ status: false, message: 'Connection error!' })
//             }
//             if (!resolve) {
//                 UsersSchema.findOne({ phone: postData.phone }, function(reject, resolve) {
//                     if (reject) {
//                         return res.status(500).send({ status: false, message: 'Connection error!' })
//                     }
//                     if (!resolve) {
//                         var data = new UsersSchema( postData )
//                         data.id = data._id;
//                         data.email = email;
//                         data.password = Buffer.from(postData.password).toString('base64');
//                         data.save()
//                         .then( resolve => {
//                             req.logIn(resolve, function(reject) {
//                                 if (reject) { 
//                                       req.logout();
//                                       return res.status(500).send(reject);  
//                                 }
//                                 return res.status(200).send({ status: true, message: 'Registration successful!', data: resolve });
//                             })
//                         })
//                         .catch( reject => {
//                             return res.status(500).send({ status: false, message: 'Connection error!' })
//                         })
//                     }
//                     if (resolve) {
//                         return res.status(500).send({ status: false, message: 'Phone number already exists!' })
//                     }
//                 })
//             }
//             if (resolve) {
//                 return res.status(500).send({ status: false, message: 'User already exists!' })
//             }
//         })
//     }
// })

router.post('/login', function (req, res, next) {
    if (!req.body.email || !req.body.password || !req.body.role) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var role = req.body.role;
        passport.authenticate('local', function(reject, resolve) {
            if (reject) { 
                return res.status(500).send(reject); 
            }
            req.logIn(resolve, function(reject) {
              if (reject) { 
                  req.logout();
                    return res.status(500).send(reject);  
              }
              if (role !== resolve.role) {
                req.logout();
                return res.status(500).send({
                    status: false,
                    message: 'Unauthorized! Try changing roles'
                });
              }
              return res.status(200).send({ status: true, message: 'Login successful!', data: resolve });
            })
        })(req, res, next);
    }
})

router.post('/change-password', function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.status(500).send({ status: false, message: 'Missing/invalid payload!' })
    } else {
        var email = req.body.email.toLocaleLowerCase();
        var encryptedPassword = Buffer.from(req.body.password).toString('base64');
        const postData = {
            password: encryptedPassword,
        }
        UsersSchema.findOneAndUpdate({email: email}, {$set: postData}, {new: true}, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' });
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User does not exist!' });
            }
            if (resolve) {
                return res.status(200).send({ status: true, message: 'Password changed successfully!', data: resolve });
            }
        })
    }
})

router.get('/token/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        UsersSchema.findOne({ id: user_id }, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' })
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User does not exist!' });
            }
            if (resolve) {
                return res.status(200).send({ 
                    status: true, 
                    message: 'Successful!', 
                    data: {
                        token: resolve.token
                    } 
                });
            }
        })
    }
})

router.get('/logout/:user_id', function (req, res, next) {
    var user_id = req.params.user_id;
    if (!user_id) {
        return res.status(500).send({ status: false, message: 'Missing/invalid params!' })
    } else {
        const removeToken = {
            token: null
        }
        UsersSchema.findOneAndUpdate({id: user_id}, {$set: removeToken}, {new: true}, function(reject, resolve) {
            if (reject) {
                return res.status(500).send({ status: false, message: 'Connection error!' });
            }
            if (!resolve) {
                return res.status(404).send({ status: false, message: 'User does not exist!' });
            }
            if (resolve) {
                req.logout();
                return res.status(200).send({ status: true, message: 'Logout successful!' });
            }
        })
    }
})

module.exports = router;

function generateToken(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}