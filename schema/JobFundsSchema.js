// Schema for MongoDB
var mongoose = require('mongoose');  

var JobFundsSchema = new mongoose.Schema({  
    id: String,
    job_id: String,
    amount: Number,
    commission: Number,
    status: { type: String, enum: ['onhold', 'settled', 'reverse'], default: 'onhold' },

},
{
    timestamps: true
});
mongoose.model('job_funds', JobFundsSchema);
module.exports = mongoose.model('job_funds');