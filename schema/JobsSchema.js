// Schema for MongoDB
var mongoose = require('mongoose');  

var JobsSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    category_id: String,
    skill_set_id: String,
    title: String,
    description: String,
    budget: Number,
    start_date: Date,
    end_date: Date,
    job_assigned: { type: Boolean, default: false },
    lng: Number,
    lat: Number,
    milestone_needed: { type: Boolean, default: false },
    user_artisan_id: String,
    job_mode: { type: String, enum: ['repetitive', 'one-off'] },
    project_scale: { type: String, enum: ['small', 'medium', 'large'] },
    adjustment: { type: String, enum: ['flexible', 'fixed'] },
    status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled', 'ongoing', 'completed'], default: 'pending' },
    verified: { type: Boolean, default: false },
    artisan_status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled', 'ongoing'], default: 'pending' },
    employer_status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled', 'ongoing'], default: 'pending' },

},
{
    timestamps: true
});
mongoose.model('jobs', JobsSchema);
module.exports = mongoose.model('jobs');