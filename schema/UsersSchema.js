// Schema for MongoDB
var mongoose = require('mongoose');  

var UsersSchema = new mongoose.Schema({  
    id: Number,
    first_name: String,
    last_name: String,
    type: String,
    email: String,
    avatar: String,
    lng: String,
    lat: String,
    address: String,
    country_id: Number,
    state_id: Number,
    phone: String,
    dob: Date,
    category_id: Number,
    description: String,
    availability: { type: String, enum: ['online', 'offline', 'away', 'holiday', 'not_available'], default: 'online' },
    city_id: Number,
    national_identity: String,
    government_id: String,
    email_verified_at: { type: Date, default: Date.now },
    phone_verified_at: { type: Date, default: Date.now },
    password: String,
    token: String,

},
{
    timestamps: true
});
mongoose.model('users', UsersSchema);
module.exports = mongoose.model('users');