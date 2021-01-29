// Schema for MongoDB
var mongoose = require('mongoose');  

var UserPortfoliosSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    portfolio: String,

},
{
    timestamps: true
});
mongoose.model('user_portfolios', UserPortfoliosSchema);
module.exports = mongoose.model('user_portfolios');