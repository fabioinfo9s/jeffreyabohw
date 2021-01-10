// Schema for MongoDB
var mongoose = require('mongoose');  

var JobAttributeRatingsSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    attribute_id: Number,
    artisan_rating: Number,
    artisan_id: Number,

},
{
    timestamps: true
});
mongoose.model('job_attribute_ratings', JobAttributeRatingsSchema);
module.exports = mongoose.model('job_attribute_ratings');