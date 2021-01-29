// Schema for MongoDB
var mongoose = require('mongoose');  

var ProposalsSchema = new mongoose.Schema({  
    id: String,
    cover_letter: String,
    approved: { type: Boolean, default: true },
    bid_amount: Number,
    job_id: String,
    job_offer_id: String,
    artisan_id: String,
    employer_id: String,
    due_date: Date,

},
{
    timestamps: true
});
mongoose.model('proposals', ProposalsSchema);
module.exports = mongoose.model('proposals');