// Schema for MongoDB
var mongoose = require('mongoose');  

var FailedJobsSchema = new mongoose.Schema({  
    id: String,
    connection: String,
    queue: String,
    payload: String,
    exception: String,
    failed_at: { type: Date, default: Date.now },

},
{
    timestamps: true
});
mongoose.model('failed_jobs', FailedJobsSchema);
module.exports = mongoose.model('failed_jobs');