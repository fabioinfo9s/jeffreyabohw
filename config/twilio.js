// TWILLO CONFIG STARTS
var accountSid = 'ACa8a8729285553e83365d36547890d44b'; // Account SID from www.twilio.com/console
var authToken = 'f921e025ac6e4b9c90f67cc51196df07';   // Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


module.exports = {

    sendSms: function sendSms(smsPostData, callback) {
        var sender = smsPostData.from;
        var receiver = slicePhone(smsPostData.to);
        var message = smsPostData.text;
        var country_code = smsPostData.country_code;
            // client.messages.create({
            //     body: message,
            //     to: country_code + receiver, 
            //     messagingServiceSid: 'MG2f0338f1639fca8a774088163de1ac10',
            //     })
            //     .then((message) => {
            //         return callback(null, { 
            //             status: true, 
            //             otp_code: message,
            //             message: "OTP code sent succeessfully!" 
            //         } /* resolve = message.sid */)
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //         return callback(reject = { 
            //             status: false, 
            //             otp_code: message,
            //             message: "Connection error!" 
            //         }, null)
            //     })
            return callback(null, { 
                        status: true, 
                        otp_code: message,
                        message: "OTP code sent succeessfully!" 
                    } /* resolve = message.sid */)
    },
    
    sendOTP: function sendOTP(country_code, phone, callback) {
        const otp = generateOTP(4);
        const postData = {
            to: phone,
            text: 'Your OTP is: ' + otp + '.',
            country_code: country_code,
        }
        this.sendSms(postData, (reject, resolve) => {
            if (reject) {
                return callback(reject, null)
            }
            if (resolve) {
                return callback(null, {
                    status: true,
                    message: 'OTP sent succeessfully!',
                    message_id: resolve,
                    otp_code: otp,
                })
            }
        })
    }
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
