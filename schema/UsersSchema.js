// Schema for MongoDB
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({  
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    country_code: String,
    phone: String,
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