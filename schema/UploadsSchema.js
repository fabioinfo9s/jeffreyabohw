// Schema for MongoDB
var mongoose = require('mongoose');  

var UploadsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    image: String,
    type: String,
    featured: Boolean,
    hide: Boolean,

},
{
    timestamps: true
});
mongoose.model('uploads', UploadsSchema);
module.exports = mongoose.model('uploads');