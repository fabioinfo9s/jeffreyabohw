// Schema for MongoDB
var mongoose = require('mongoose');  

var MilestoneTransactionsSchema = new mongoose.Schema({  
    id: Number,
    amount: Number,
    keyedin_profile: Number,
    milestone_id: Number,
    status: String,
    completed: { type: Boolean, default: '0' },

},
{
    timestamps: true
});
mongoose.model('milestone_transactions', MilestoneTransactionsSchema);
module.exports = mongoose.model('milestone_transactions');