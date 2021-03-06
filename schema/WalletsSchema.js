// Schema for MongoDB
var mongoose = require('mongoose');

var WalletsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    available_balance: String,
    pending_balance: String,
    currency_symbol: { type: String, default: '₦' },
    currency: { type: String, default: 'NAIRA' },
    currency_code: { type: String, default: 'NGN' },
    last_topup_amount: String,
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('wallets', WalletsSchema);
module.exports = mongoose.model('wallets');