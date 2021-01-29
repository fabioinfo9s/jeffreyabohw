// Schema for MongoDB
var mongoose = require('mongoose');  

var VideoUploadsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    type: String,
    title: String,
    description: String,
    processed: Boolean,
    video_id: String,
    video_filename: String,
    videoable_id: String,
    videoable_type: String,
    visibility: { type: String, default: 'public' },
    processed_percentage: String,

},
{
    timestamps: true
});
mongoose.model('video_uploads', VideoUploadsSchema);
module.exports = mongoose.model('video_uploads');