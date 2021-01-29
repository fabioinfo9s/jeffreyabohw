// Schema for MongoDB
var mongoose = require('mongoose');  

var BillingAddressSchema = new mongoose.Schema({  
    id: String,
    address1: String,
    address2: String,
    zipcode: String,
    user_id: String,
    country_id: String,
    state_id: String,
    city_id: String,

},
{
    timestamps: true
});
mongoose.model('billing_address', BillingAddressSchema);
module.exports = mongoose.model('billing_address');