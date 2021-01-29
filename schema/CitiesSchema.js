// Schema for MongoDB
var mongoose = require('mongoose');  

var CitiesSchema = new mongoose.Schema({  
    id: String,
    name: String,
    lat: String,
    lng: String,
    state_id: String,
    country_id: String,

},
{
    timestamps: true
});
mongoose.model('cities', CitiesSchema);
module.exports = mongoose.model('cities');