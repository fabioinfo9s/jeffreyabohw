// Schema for MongoDB
var mongoose = require('mongoose');  

var UserRatesSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    rate_amount: Number,
    rate: String,

},
{
    timestamps: true
});
mongoose.model('user_rates', UserRatesSchema);
module.exports = mongoose.model('user_rates');