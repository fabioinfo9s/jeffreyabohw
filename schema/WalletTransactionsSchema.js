// Schema for MongoDB
var mongoose = require('mongoose');  

var WalletTransactionsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    title: String,
    type: { type: String, enum: ['credit', 'debit'] },
    identifier: String,
    transactionable_id: Number,
    transactionable_type: String,

},
{
    timestamps: true
});
mongoose.model('wallet_transactions', WalletTransactionsSchema);
module.exports = mongoose.model('wallet_transactions');