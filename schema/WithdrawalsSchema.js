// Schema for MongoDB
var mongoose = require('mongoose');

var WithdrawalSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    amount: String,
    currency_symbol: { type: String, default: '₦' },
    currency: { type: String, default: 'NAIRA' },
    currency_code: { type: String, default: 'NGN' },
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('withdrawal', WithdrawalSchema);
module.exports = mongoose.model('withdrawal');