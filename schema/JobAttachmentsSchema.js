// Schema for MongoDB
var mongoose = require('mongoose');  

var JobAttachmentsSchema = new mongoose.Schema({  
    id: String,
    job_id: String,
    image: String,

},
{
    timestamps: true
});
mongoose.model('job_attachments', JobAttachmentsSchema);
module.exports = mongoose.model('job_attachments');