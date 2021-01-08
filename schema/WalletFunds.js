// Schema for MongoDB
var mongoose = require('mongoose');  

var WalletFundsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    amount: Number,
    status: String,
    payment: Boolean,
    country_id: String,
    investment_problem: String,
    user_debit_token: String,
    transaction_reference: String,
    gateway_charge_response: String,
    gateway_charge_message: String,
    gateway_final_charge_status: String,
    gateway_final_charge_message: String,
    gateway_debit_response: String,

},
{
    timestamps: true
});
mongoose.model('wallet_funds', WalletFundsSchema);
module.exports = mongoose.model('wallet_funds');