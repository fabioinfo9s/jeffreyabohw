// Schema for MongoDB
var mongoose = require('mongoose');  

var AttributesSchema = new mongoose.Schema({  
    id: String,
    description: String,

},
{
    timestamps: true
});
mongoose.model('attributes', AttributesSchema);
module.exports = mongoose.model('attributes');