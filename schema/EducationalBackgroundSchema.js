// Schema for MongoDB
var mongoose = require('mongoose');  

var EducationalBackgroundSchema = new mongoose.Schema({  
    id: String,
    name: String,
    address: String,
    course: String,
    start_date: Date,
    end_date: Date,
    degree: String,
    user_id: String,
    school_name: String,

},
{
    timestamps: true
});
mongoose.model('educational_background', EducationalBackgroundSchema);
module.exports = mongoose.model('educational_background');