// Schema for MongoDB
var mongoose = require('mongoose');  

var UserPortfoliosSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    portfolio: String,

},
{
    timestamps: true
});
mongoose.model('user_portfolios', UserPortfoliosSchema);
module.exports = mongoose.model('user_portfolios');