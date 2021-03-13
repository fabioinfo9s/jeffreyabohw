// Schema for MongoDB
var mongoose = require('mongoose');

var EmploymentSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    role: String,
    organizations: { type: Array },
    status: { type: Boolean, default: true },
},
{
    timestamps: true
});
mongoose.model('employment', EmploymentSchema);
module.exports = mongoose.model('employment');