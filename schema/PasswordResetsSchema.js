// Schema for MongoDB
var mongoose = require('mongoose');  

var PasswordResetsSchema = new mongoose.Schema({  
    email: String,
    token: String,
    created_at: { type: Date, default: Date.now },

},
{
    timestamps: true
});
mongoose.model('password_resets', PasswordResetsSchema);
module.exports = mongoose.model('password_resets');