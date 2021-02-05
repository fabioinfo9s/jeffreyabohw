var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const passport = require('passport');
var cloudinary = require('../config/cloudinary');
var fs = require('fs');
const {ensureAuthenticated} = require('../config/auth');
var UsersSchema = require('../schema/UsersSchema');

// Import Schema


// Routes

router.post('/upload-avatar', ensureAuthenticated, function (req, res) {
    var base64String = req.body.image;
    if (!base64String) {
        res.status(500).send({ message: 'Missing params' })
    } else {
        cloudinary.decodeBase64(base64String, (url) => {
            if (url) {
                cloudinary.uploadImage(url, (secure_url) => {
                    if (secure_url) {
                        var user_id = req.user.id;
                        const postData = {
                            avatar: secure_url,
                        }
                        UsersSchema.findOneAndUpdate({id: user_id}, {$set: postData}, {new: true})
                            .then( resolve => {
                                return res.status(200).send({ message: 'Image uploaded successfully' })
                            }, reject => {
                                return res.status(500).send({ message: 'Error saving avatar! Try again' })
                        })
                    }
                })
            }
        })
    }  
})

router.post('/video-upload', function (req, res) {
   
})

module.exports = router;