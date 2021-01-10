// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanRatingsSchema = new mongoose.Schema({  
    id: Number,
    artisan_id: Number,
    user_id: Number,
    rating: Number,
    comment: String,

},
{
    timestamps: true
});
mongoose.model('artisan_ratings', ArtisanRatingsSchema);
module.exports = mongoose.model('artisan_ratings');