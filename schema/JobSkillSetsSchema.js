// Schema for MongoDB
var mongoose = require('mongoose');  

var JobSkillSetsSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    skill_set_id: Number,

},
{
    timestamps: true
});
mongoose.model('job_skill_sets', JobSkillSetsSchema);
module.exports = mongoose.model('job_skill_sets');