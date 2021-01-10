// Schema for MongoDB
var mongoose = require('mongoose');  

var UserRatesSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    rate_amount: Number,
    rate: String,

},
{
    timestamps: true
});
mongoose.model('user_rates', UserRatesSchema);
module.exports = mongoose.model('user_rates');