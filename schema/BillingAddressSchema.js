// Schema for MongoDB
var mongoose = require('mongoose');  

var BillingAddressSchema = new mongoose.Schema({  
    id: Number,
    address1: String,
    address2: String,
    zipcode: String,
    user_id: Number,
    country_id: Number,
    state_id: Number,
    city_id: Number,

},
{
    timestamps: true
});
mongoose.model('billing_address', BillingAddressSchema);
module.exports = mongoose.model('billing_address');