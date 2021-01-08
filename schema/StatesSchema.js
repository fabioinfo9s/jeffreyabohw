// Schema for MongoDB
var mongoose = require('mongoose');  

var StatesSchema = new mongoose.Schema({  
    id: Number,
    name: String,
    country_id: Number,
    code: String,

},
{
    timestamps: true
});
mongoose.model('states', StatesSchema);
module.exports = mongoose.model('states');