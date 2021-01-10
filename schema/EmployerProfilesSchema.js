// Schema for MongoDB
var mongoose = require('mongoose');  

var EmployerProfilesSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    description: String,
    employees: Number,
    company_name: String,
    vat_number: String,

},
{
    timestamps: true
});
mongoose.model('employer_profiles', EmployerProfilesSchema);
module.exports = mongoose.model('employer_profiles');