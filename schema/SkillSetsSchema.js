// Schema for MongoDB
var mongoose = require('mongoose');  

var SkillSetsSchema = new mongoose.Schema({  
    id: Number,
    category_id: Number,
    name: String,
    slug: String,
    description: String,

},
{
    timestamps: true
});
mongoose.model('skill_sets', SkillSetsSchema);
module.exports = mongoose.model('skill_sets');