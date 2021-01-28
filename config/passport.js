const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../schema/UsersSchema');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email, password, done)=> { 
                var postData = {
                    token: generateToken(30)
                }
                //match user
                User.findOneAndUpdate({email : email}, {$set: postData}, {new: true})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'Email is not registered'});
                 }
                 //match pass
                 bcrypt.compare(password, user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{message : 'Password incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
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