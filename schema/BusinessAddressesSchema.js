// Schema for MongoDB
var mongoose = require('mongoose');  

var BusinessAddressesSchema = new mongoose.Schema({  
    id: Number,
    address1: String,
    address2: String,
    zipcode: Number,
    user_id: Number,
    country_id: Number,
    state_id: Number,
    city_id: Number,

},
{
    timestamps: true
});
mongoose.model('business_addresses', BusinessAddressesSchema);
module.exports = mongoose.model('business_addresses');