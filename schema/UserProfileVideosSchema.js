// Schema for MongoDB
var mongoose = require('mongoose');  

var UserProfileVideosSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    profile_video: String,

},
{
    timestamps: true
});
mongoose.model('user_profile_videos', UserProfileVideosSchema);
module.exports = mongoose.model('user_profile_videos');