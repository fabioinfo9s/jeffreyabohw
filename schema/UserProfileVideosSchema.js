// Schema for MongoDB
var mongoose = require('mongoose');  

var UserProfileVideosSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    profile_video: String,

},
{
    timestamps: true
});
mongoose.model('user_profile_videos', UserProfileVideosSchema);
module.exports = mongoose.model('user_profile_videos');