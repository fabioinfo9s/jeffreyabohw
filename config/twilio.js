// TWILLO CONFIG STARTS
var accountSid = 'ACa8a8729285553e83365d36547890d44b'; // Account SID from www.twilio.com/console
var authToken = 'f921e025ac6e4b9c90f67cc51196df07';   // Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
//var OTPSchema = require('../schema/OTPSchema');


module.exports = {

    // sendSms: function sendSms(smsPostData, callback) {
    //     var sender = smsPostData.from;
    //     var receiver = slicePhone(smsPostData.to);
    //     var message = smsPostData.text;
    //     var country_code = smsPostData.country_code;
    //         client.messages.create({
    //             body: message,
    //             to: country_code + receiver, 
    //             messagingServiceSid: 'MG2f0338f1639fca8a774088163de1ac10',
    //             })
    //             .then((message) => {
    //                 return callback(null, resolve = message.sid)
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //                 return callback(reject = { message: "Connection error!" }, null)
    //             })
    // },
    
    // sendOTP: function sendOTP(phone, callback) {
    //     const otp = generateOTP(6);
    //     const postData = {
    //         to: phone,
    //         text: 'Your OTP is: ' + otp + '. valid for 15 mins',
    //         country_code: '+234',
    //     }
    //     this.sendSms(postData, (reject, resolve) => {
    //         if (reject) {
    //             return callback(reject, null)
    //         }
    //         if (resolve) {
    //             const otpPostData = {
    //                 value: otp
    //             }
    //             var otpData = new OTPSchema ( otpPostData )
    //             var id = otpData._id;
    //             otpData.id = id;
    //             otpData.save();
    //             setTimeout(removeOTP(otp), 900000);
    //             return callback(null, resolve)
    //         }
    //     })
    // }
}

function removeOTP(otp) {
    OTPSchema.findOneAndDelete({value: otp})
    .then( resolve => {
        console.log('OTP ' + otp + ' expired!')
    }, reject => {
        console.log('Unable to remove OTP')
    })
}

// REMOVE '0' FROM A PHONE NUMBER FIRST DIGIT

function slicePhone(phone) {
    if (phone.charAt(0) === '0') {
        phone = phone.slice(1);
        return phone;
      } else {
        return phone;
    }
}

// GENERATE OTP

function generateOTP(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
