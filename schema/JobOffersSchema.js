// Schema for MongoDB
var mongoose = require('mongoose');  

var JobOffersSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    created_offer_user_id: Number,
    user_artisan_id: Number,
    pitch: String,
    offer_amount: Number,
    due_date: Date,
    discount_amount: Number,
    has_milestone: { type: Boolean, default: false },
    payment_mode: { type: String, enum: ['milestone', 'upfront_end_project'] },
    artisan_status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled'], default: 'pending' },
    employer_status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled'], default: 'pending' },
},
{
    timestamps: true
});
mongoose.model('job_offers', JobOffersSchema);
module.exports = mongoose.model('job_offers');