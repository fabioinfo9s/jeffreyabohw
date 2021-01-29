// Schema for MongoDB
var mongoose = require('mongoose');  

var CronSimilarJobsSchema = new mongoose.Schema({  
    id: String,
    user_email: String,
    jobs_id: String,
    email_sent: String,

},
{
    timestamps: true
});
mongoose.model('cron_similar_jobs', CronSimilarJobsSchema);
module.exports = mongoose.model('cron_similar_jobs');