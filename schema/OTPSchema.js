// Schema for MongoDB
var mongoose = require('mongoose');  

var OTPSchema = new mongoose.Schema({  
    id: String,
    value: String,

},
{
    timestamps: true
});
mongoose.model('otp', OTPSchema);
module.exports = mongoose.model('otp');