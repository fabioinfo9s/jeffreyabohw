// Schema for MongoDB
var mongoose = require('mongoose');  

var RatingsSchema = new mongoose.Schema({  
    id: String,
    project_id: String,
    user_id: String,
    artisan_id: String,
    protisan_id: String,
    rating: String,
    comment: String,
},
{
    timestamps: true
});
mongoose.model('ratings', RatingsSchema);
module.exports = mongoose.model('ratings');