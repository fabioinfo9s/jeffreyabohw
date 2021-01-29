// Schema for MongoDB
var mongoose = require('mongoose');  

var CardTransactionsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    sera: String,
    flwRef: String,

},
{
    timestamps: true
});
mongoose.model('card_transactions', CardTransactionsSchema);
module.exports = mongoose.model('card_transactions');