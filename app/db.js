// db.js
var mongoose = require('mongoose');

// Live Database URL
mongoose.connect('mongodb+srv://keyedIn:keyedin@cluster0.tmmor.mongodb.net/KeyedIn?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
