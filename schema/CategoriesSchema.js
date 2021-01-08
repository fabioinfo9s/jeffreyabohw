// Schema for MongoDB
var mongoose = require('mongoose');  

var CategoriesSchema = new mongoose.Schema({  
    id: Number,
    name: String,
    slug: String,
    description: String,

},
{
    timestamps: true
});
mongoose.model('categories', CategoriesSchema);
module.exports = mongoose.model('categories');