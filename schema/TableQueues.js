// Schema for MongoDB
var mongoose = require('mongoose');  

var TableQueuesSchema = new mongoose.Schema({  
    id: String,
    queue: String,
    payload: String,
    attempts: Number,
    reserved_at: Number,
    available_at: Number,
    created_at: Number,

},
{
    timestamps: true
});
mongoose.model('table_queues', TableQueuesSchema);
module.exports = mongoose.model('table_queues');