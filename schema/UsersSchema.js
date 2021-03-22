// Schema for MongoDB
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({  
    id: String,
    first_name: String,
    last_name: String,
    username: String,
    address: String,
    city: String,
    state: String,
    country: String,
    longitude: String,
    latitude: String,
    email: String,
    password: String,
    country_code: String,
    phone: String,
    rating: { type: String, default: '0' },
    availability: { type: String, default: 'offline' },
    status: { type: Boolean, default: true },
    role: { type: String, default: 'artisan' },
    token: String,
},
{
    timestamps: true
});
mongoose.model('users', UsersSchema);
module.exports = mongoose.model('users');