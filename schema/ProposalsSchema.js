// Schema for MongoDB
var mongoose = require('mongoose');

var ProposalsSchema = new mongoose.Schema({  
    id: String,
    artisan_id: String,
    protisan_id: String,
    project_id: String,
    role: String,
    cover_letter: String,
    approved: { type: Boolean, default: true },
    bid_amount: String,
    due_date: String,
},
{
    timestamps: true
});
mongoose.model('proposals', ProposalsSchema);
module.exports = mongoose.model('proposals');