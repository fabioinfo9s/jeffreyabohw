// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanProfilesSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    category_id: String,
    skill_set_id: String,
    country_id: String,
    state_id: String,
    city_id: String,
    lng: String,
    lat: String,
    national_identity: String,
    guarantor_name: String,
    guarantor_address: String,
    guarantor_identity: String,
    payment_mode: { type: String, enum: ['fixed', 'flexible'] },
    fixed_amount: Number,
    guarantor_phone: Number,
},
{
    timestamps: true
});
mongoose.model('artisan_profiles', ArtisanProfilesSchema);
module.exports = mongoose.model('artisan_profiles');