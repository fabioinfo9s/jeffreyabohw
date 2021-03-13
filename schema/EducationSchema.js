// Schema for MongoDB
var mongoose = require('mongoose');

var EducationSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    role: String,
    institutions: { type: Array },
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('education', EducationSchema);
module.exports = mongoose.model('education');