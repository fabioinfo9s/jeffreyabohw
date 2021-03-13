// Schema for MongoDB
var mongoose = require('mongoose');

var ExpertiseSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    bio: String,
    category: String,
    skills: { type: Array },
    role: String,
    level_of_experience: String,
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('expertise', ExpertiseSchema);
module.exports = mongoose.model('expertise');