// Schema for MongoDB
var mongoose = require('mongoose');  

var JobsSchema = new mongoose.Schema({  
    id: Number,
    user_id: Number,
    category_id: Number,
    skill_set_id: String,
    title: String,
    description: String,
    budget: Number,
    verified: { type: Boolean, default: false },
    status: { type: String, default: 'pending' },

},
{
    timestamps: true
});
mongoose.model('jobs', JobsSchema);
module.exports = mongoose.model('jobs');