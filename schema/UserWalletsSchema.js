// Schema for MongoDB
var mongoose = require('mongoose');  

var UserWalletsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    country_id: String,
    available_balance: Number,
    total_balance: Number,

},
{
    timestamps: true
});
mongoose.model('user_wallets', UserWalletsSchema);
module.exports = mongoose.model('user_wallets');