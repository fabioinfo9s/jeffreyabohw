// Schema for MongoDB
var mongoose = require('mongoose');  

var JobRatingsSchema = new mongoose.Schema({  
    id: String,
    job_id: String,
    user_id: String,
    rating: Number,
    comment: String,
    user_employer_id: String,
    employer_rating: Number,
    employer_comment: String,
    user_artisan_id: String,
    artisan_rating: Number,
    artisan_comment: String,

},
{
    timestamps: true
});
mongoose.model('job_ratings', JobRatingsSchema);
module.exports = mongoose.model('job_ratings');