// Schema for MongoDB
var mongoose = require('mongoose');  

var PhoneVerificationsSchema = new mongoose.Schema({  
    id: Number,
    phone: String,
    verification_code: String,
    api_provider: String,
    api_response: String,
    verified_at: { type: Date, default: Date.now },

},
{
    timestamps: true
});
mongoose.model('phone_verifications', PhoneVerificationsSchema);
module.exports = mongoose.model('phone_verifications');