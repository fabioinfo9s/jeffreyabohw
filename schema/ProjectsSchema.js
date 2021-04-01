// Schema for MongoDB
var mongoose = require('mongoose');

var ProjectsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    avatar: String,
    attachments: { type: Array },
    role: String,
    name: String,
    description: String,
    type: String,
    profession: String,
    skill_set: String,
    tags: { type: Array },
    location: { type: Array },
    bids: { type: Array },
    priority: { type: String, default: 'medium' },
    payment_mode: String,
    budget: String,
    start_date: String,
    end_date: String,
    status: { type: String, default: 'open' },
},
{
    timestamps: true
});
mongoose.model('projects', ProjectsSchema);
module.exports = mongoose.model('projects');