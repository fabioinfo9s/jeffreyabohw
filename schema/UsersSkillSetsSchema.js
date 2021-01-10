// Schema for MongoDB
var mongoose = require('mongoose');  

var UsersSkillSetsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    skill_set_id: Number,

},
{
    timestamps: true
});
mongoose.model('users_skill_sets', UsersSkillSetsSchema);
module.exports = mongoose.model('users_skill_sets');