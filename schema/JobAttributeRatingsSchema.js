// Schema for MongoDB
var mongoose = require('mongoose');  

var JobAttributeRatingsSchema = new mongoose.Schema({  
    id: String,
    job_id: String,
    attribute_id: String,
    artisan_rating: Number,
    artisan_id: String,

},
{
    timestamps: true
});
mongoose.model('job_attribute_ratings', JobAttributeRatingsSchema);
module.exports = mongoose.model('job_attribute_ratings');