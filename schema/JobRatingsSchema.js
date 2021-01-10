// Schema for MongoDB
var mongoose = require('mongoose');  

var JobRatingsSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    user_id: Number,
    rating: Number,
    comment: String,
    user_employer_id: Number,
    employer_rating: Number,
    employer_comment: String,
    user_artisan_id: Number,
    artisan_rating: Number,
    artisan_comment: String,

},
{
    timestamps: true
});
mongoose.model('job_ratings', JobRatingsSchema);
module.exports = mongoose.model('job_ratings');