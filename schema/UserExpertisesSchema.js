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
    core_skill: String,
    category_id: Number,

},
{
    timestamps: true
});
mongoose.model('user_expertise', UserExpertisesSchema);
module.exports = mongoose.model('user_expertise');