// Schema for MongoDB
var mongoose = require('mongoose');  

var UsersSkillSetsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    skill_set_id: String,

},
{
    timestamps: true
});
mongoose.model('users_skill_sets', UsersSkillSetsSchema);
module.exports = mongoose.model('users_skill_sets');