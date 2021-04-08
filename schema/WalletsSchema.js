// Schema for MongoDB
var mongoose = require('mongoose');

var WalletsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    available_balance: String,
    pending_balance: String,
    last_topup_amount: String,
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('wallets', WalletsSchema);
module.exports = mongoose.model('wallets');