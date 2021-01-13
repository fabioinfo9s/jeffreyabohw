// Schema for MongoDB
var mongoose = require('mongoose');  

var JobAttachmentsSchema = new mongoose.Schema({  
    id: Number,
    job_id: Number,
    image: String,

},
{
    timestamps: true
});
mongoose.model('job_attachments', JobAttachmentsSchema);
module.exports = mongoose.model('job_attachments');