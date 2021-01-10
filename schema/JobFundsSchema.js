// Schema for MongoDB
var mongoose = require('mongoose');  

var JobFundsSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    amount: Number,
    commission: Number,
    status: { type: String, enum: ['onhold', 'settled', 'reverse'], default: 'onhold' },

},
{
    timestamps: true
});
mongoose.model('job_funds', JobFundsSchema);
module.exports = mongoose.model('job_funds');