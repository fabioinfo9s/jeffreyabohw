// Schema for MongoDB
var mongoose = require('mongoose');  

var MilestonesSchema = new mongoose.Schema({  
    id: Number,
    title: String,
    amount: Number,
    due_date: Date,
    job_id: Number,
    proposal_id: Number,

},
{
    timestamps: true
});
mongoose.model('milestones', MilestonesSchema);
module.exports = mongoose.model('milestones');