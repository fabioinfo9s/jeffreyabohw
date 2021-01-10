// Schema for MongoDB
var mongoose = require('mongoose');  

var CommissionsSchema = new mongoose.Schema({  
    id: Number,
    type: String,
    amount: Number,

},
{
    timestamps: true
});
mongoose.model('commissions', CommissionsSchema);
module.exports = mongoose.model('commissions');