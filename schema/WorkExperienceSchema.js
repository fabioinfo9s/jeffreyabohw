// Schema for MongoDB
var mongoose = require('mongoose');  

var WorkExperienceSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    name: String,
    address: String,
    role: String,
    responsibilities: String,
    start_date: Date,
    end_date: Date,
    completed: Boolean,

},
{
    timestamps: true
});
mongoose.model('work_experience', WorkExperienceSchema);
module.exports = mongoose.model('work_experience');