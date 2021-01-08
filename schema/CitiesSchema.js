// Schema for MongoDB
var mongoose = require('mongoose');  

var CitiesSchema = new mongoose.Schema({  
    id: Number,
    name: String,
    lat: String,
    lng: String,
    state_id: Number,
    country_id: Number,

},
{
    timestamps: true
});
mongoose.model('cities', CitiesSchema);
module.exports = mongoose.model('cities');