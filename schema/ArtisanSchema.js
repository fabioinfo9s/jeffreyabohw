// Schema for MongoDB
var mongoose = require('mongoose');  

var ArtisanSchema = new mongoose.Schema({  
    category_id: Number,
    address: String,
    guarantor_name: String,
    guarantor_address: String,
    guarantor_phone: Number,
    description: String,
    job_type: String,
    payment_mode: String,
    fixed_amount: Number,
    budget_min: Number,
    budget_max: Number

});
mongoose.model('Artisan', ArtisanSchema);
module.exports = mongoose.model('Artisan');