// Schema for MongoDB
var mongoose = require('mongoose');  

var CountriesSchema = new mongoose.Schema({  
    id: Number,
    name: String,
    code: String,
    short_name: String,
    currency: String,
},
{
    timestamps: true
});
mongoose.model('countries', CountriesSchema);
module.exports = mongoose.model('countries');