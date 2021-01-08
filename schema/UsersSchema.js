// Schema for MongoDB
var mongoose = require('mongoose');  

var UsersSchema = new mongoose.Schema({  
    id: Number,
    first_name: String,
    last_name: String,
    type: String,
    email: String,
    lng: String,
    lat: String,
    address: String,
    country_id: Number,
    state_id: Number,
    city_id: Number,
    national_identity: String,
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