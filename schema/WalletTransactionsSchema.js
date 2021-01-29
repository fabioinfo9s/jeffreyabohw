// Schema for MongoDB
var mongoose = require('mongoose');  

var WalletTransactionsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    title: String,
    type: { type: String, enum: ['credit', 'debit'] },
    identifier: String,
    transactionable_id: String,
    transactionable_type: String,

},
{
    timestamps: true
});
mongoose.model('wallet_transactions', WalletTransactionsSchema);
module.exports = mongoose.model('wallet_transactions');