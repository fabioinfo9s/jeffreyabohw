// Schema for MongoDB
var mongoose = require('mongoose');  

var AttributesSchema = new mongoose.Schema({  
    id: Number,
    description: String,

},
{
    timestamps: true
});
mongoose.model('attributes', AttributesSchema);
module.exports = mongoose.model('attributes');