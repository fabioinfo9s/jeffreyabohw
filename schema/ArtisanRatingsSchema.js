// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanRatingsSchema = new mongoose.Schema({  
    id: String,
    artisan_id: String,
    user_id: String,
    rating: Number,
    comment: String,
    artisan_rating: Number,
    job_id: String,
    job_success: Number,
    quality: Number,
    availability: Number,

},
{
    timestamps: true
});
mongoose.model('artisan_ratings', ArtisanRatingsSchema);
module.exports = mongoose.model('artisan_ratings');