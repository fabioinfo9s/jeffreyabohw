// Schema for MongoDB
var mongoose = require('mongoose');  

var MilestonesSchema = new mongoose.Schema({  
    id: String,
    title: String,
    amount: Number,
    due_date: Date,
    job_id: String,
    proposal_id: String,

},
{
    timestamps: true
});
mongoose.model('milestones', MilestonesSchema);
module.exports = mongoose.model('milestones');