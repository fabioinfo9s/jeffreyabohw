// Schema for MongoDB
var mongoose = require('mongoose');  

var UserExpertisesSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    bio: String,
    level: String,
    other: String,
    service_category: String,
    skills: String,

},
{
    timestamps: true
});
mongoose.model('user_expertise', UserExpertisesSchema);
module.exports = mongoose.model('user_expertise');