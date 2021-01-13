// Schema for MongoDB
var mongoose = require('mongoose');  

var ProposalsSchema = new mongoose.Schema({  
    id: Number,
    cover_letter: String,
    approved: { type: Boolean, default: true },
    bid_amount: Number,
    job_id: Number,
    job_offer_id: Number,
    artisan_id: Number,
    employer_id: Number,
    due_date: Date,

},
{
    timestamps: true
});
mongoose.model('proposals', ProposalsSchema);
module.exports = mongoose.model('proposals');