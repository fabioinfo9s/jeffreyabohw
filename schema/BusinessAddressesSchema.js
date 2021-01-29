// Schema for MongoDB
var mongoose = require('mongoose');  

var BusinessAddressesSchema = new mongoose.Schema({  
    id: String,
    address1: String,
    address2: String,
    zipcode: Number,
    user_id: String,
    country_id: String,
    state_id: String,
    city_id: String,

},
{
    timestamps: true
});
mongoose.model('business_addresses', BusinessAddressesSchema);
module.exports = mongoose.model('business_addresses');