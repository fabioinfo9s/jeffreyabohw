// Schema for MongoDB
var mongoose = require('mongoose');  

var WalletFundsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
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
    identifier: String,
    success: { type: String, default: false },
    payment_method: String,
    payment_gateway: String,
    payment_gateway_charged_percentage: Number,
    payment_gateway_expected_charged_percentage: Number,
    payment_reference: String,
    payment_gateway_charge: Number,
    payment_gateway_remittance: Number,
    payment_code: String,
    payment_message: String,
    payment_status: { type: String, default: 'pending' },

},
{
    timestamps: true
});
mongoose.model('wallet_funds', WalletFundsSchema);
module.exports = mongoose.model('wallet_funds');