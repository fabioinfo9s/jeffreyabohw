// db.js
var mongoose = require('mongoose');

// Live Database URL
mongoose.connect('mongodb+srv://keyedIn:keyedin@cluster0.tmmor.mongodb.net/KeyedIn?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });




// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "keyedin-cluster-instnace.cjd0f7eqomwg.eu-west-2.rds.amazonaws.com",
//     user: "aurora",
//     password: "keyedinaurora",
//     database : 'keyedin_db'
// });

// con.connect(function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("AWS RDS Database Connected!");
//         //con.end();
//     }

// });

// module.exports = con;