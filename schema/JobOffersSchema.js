// Schema for MongoDB
var mongoose = require('mongoose');

var JobOffersSchema = new mongoose.Schema({  
    id: String,
    project_id: String,
    protisan_id: String,
    artisan_id: String,
    pitch: String,
    offer_amount: String,
    due_date: String,
    discount_amount: String,
    has_milestone: { type: Boolean, default: false },
    payment_mode: String,
    artisan_status: String,
    protisan_status: String,
},
{
    timestamps: true
});
mongoose.model('job_offers', JobOffersSchema);
module.exports = mongoose.model('job_offers');