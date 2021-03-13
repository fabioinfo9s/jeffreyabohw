const LocalStrategy = require('passport-local').Strategy;
const UsersSchema = require('../schema/UsersSchema');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField : 'email', passwordField: 'password' }, (email, password, callback) => {
                var parsedEmail = email.toLocaleLowerCase(); 
                var encryptedPassword = Buffer.from(password).toString('base64');
                var postData = {
                    token: generateToken(30)
                }
                UsersSchema.findOneAndUpdate({email: parsedEmail, password: encryptedPassword}, {$set: postData}, {new: true}, function(reject, resolve) {
                    if (reject) {
                        return callback({ status: false, message: 'Connection error!' }, null);
                    }
                    if (!resolve) {
                        return callback({ status: false, message: 'Wrong email and password combination!' }, null);
                    }
                    if (resolve) {
                        return callback(null, resolve);
                    }
                })
        })
        
    )

    passport.serializeUser(function(user, callback) {
        callback(null, user);
    });
      
    passport.deserializeUser(function(user, callback) {
        UsersSchema.findById(user.id, function(error, user) {
            callback(error, user);
        });
    }); 
}; 


function generateToken(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }