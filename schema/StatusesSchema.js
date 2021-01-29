// Schema for MongoDB
var mongoose = require('mongoose');  

var StatusesSchema = new mongoose.Schema({  
    id: String,
    name: String,
    reason: String,
    model: String,

},
{
    timestamps: true
});
mongoose.model('statuses', StatusesSchema);
module.exports = mongoose.model('statuses');