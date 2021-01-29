// Schema for MongoDB
var mongoose = require('mongoose');  

var UserLinksSchema = new mongoose.Schema({  
    id: String,
    user_id: String,
    link: String,

},
{
    timestamps: true
});
mongoose.model('user_links', UserLinksSchema);
module.exports = mongoose.model('user_links');