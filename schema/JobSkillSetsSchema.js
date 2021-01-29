// Schema for MongoDB
var mongoose = require('mongoose');  

var JobSkillSetsSchema = new mongoose.Schema({  
    id: String,
    job_id: String,
    skill_set_id: String,

},
{
    timestamps: true
});
mongoose.model('job_skill_sets', JobSkillSetsSchema);
module.exports = mongoose.model('job_skill_sets');