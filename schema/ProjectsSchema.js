// Schema for MongoDB
var mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    }
});

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
    priority: { type: String, default: 'medium' },
    payment_mode: String,
    budget: String,
    start_date: String,
    end_date: String,
    status: { type: String, default: 'open' },
    country: String,
    address_str: String,
    location: {
        type: pointSchema,
    },
},
{
    timestamps: true
});
mongoose.model('projects', ProjectsSchema);
module.exports = mongoose.model('projects');