// Schema for MongoDB
var mongoose = require('mongoose');  

var CardTransactionsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    sera: String,
    flwRef: String,

},
{
    timestamps: true
});
mongoose.model('card_transactions', CardTransactionsSchema);
module.exports = mongoose.model('card_transactions');