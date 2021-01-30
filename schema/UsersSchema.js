// Schema for MongoDB
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({  
    id: String,
    first_name: String,
    last_name: String,
    type: String,
    email: String,
    avatar: String,
    lng: String,
    lat: String,
    address: String,
    country_id: String,
    state_id: String,
    phone: String,
    dob: Date,
    category_id: String,
    description: String,
    availability: { type: String, enum: ['online', 'offline', 'away', 'holiday', 'not_available'], default: 'online' },
    city_id: String,
    national_identity: String,
    government_id: String,
    email_verified_at: { type: Date, default: Date.now },
    phone_verified_at: { type: Date, default: Date.now },
    password: String,
    token: String,
    remember_token: String,

},
{
    timestamps: true
});
mongoose.model('users', UsersSchema);
module.exports = mongoose.model('users');