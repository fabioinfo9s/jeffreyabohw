// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanProfilesSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    category_id: Number,
    skill_set_id: Number,
    country_id: Number,
    state_id: Number,
    city_id: Number,
    lng: String,
    lat: String,
    national_identity: String,
    guarantor_name: String,
    guarantor_address: String,
    guarantor_identity: String,
    guarantor_phone: Number,
},
{
    timestamps: true
});
mongoose.model('artisan_profiles', ArtisanProfilesSchema);
module.exports = mongoose.model('artisan_profiles');