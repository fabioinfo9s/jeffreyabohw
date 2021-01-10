// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanOnboardingSchema = new mongoose.Schema({  
    id: Number,
    first_name: String,
    last_name: String,
    email: string,
    phone: Number,
    office_address: String,
    home_address: String,
    artisan_type: String,
    identification: String,
    guarantor_name: String,
    guarantor_phone_no: String,
    guarantor_address: String,
    guarantor_occupation: String,

},
{
    timestamps: true
});
mongoose.model('artisan_onboarding', ArtisanOnboardingSchema);
module.exports = mongoose.model('artisan_onboarding');