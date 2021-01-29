// Schema for MongoDB
var mongoose = require('mongoose');  

var ImageUploadsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    imageable_id: String,
    imageable_type: String,
    image: String,
    type: String,
    featured: { type: Boolean, default: true },
    hide: { type: Boolean, default: false },

},
{
    timestamps: true
});
mongoose.model('image_uploads', ImageUploadsSchema);
module.exports = mongoose.model('image_uploads');