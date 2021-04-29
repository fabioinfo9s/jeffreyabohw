// Schema for MongoDB
var mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    }
});

var UsersSchema = new mongoose.Schema({  
    id: String,
    first_name: String,
    last_name: String,
    username: String,
    country: String,
    address_str: String,
    location: {
        type: pointSchema,
    },
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