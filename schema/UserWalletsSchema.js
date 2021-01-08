// Schema for MongoDB
var mongoose = require('mongoose');  

var UserWalletsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    country_id: Number,
    available_balance: Number,
    total_balance: Number,

},
{
    timestamps: true
});
mongoose.model('user_wallets', UserWalletsSchema);
module.exports = mongoose.model('user_wallets');