const mysql = require('mysql');

const con = mysql.createConnection({
    host: "keyedin-cluster-instnace.cjd0f7eqomwg.eu-west-2.rds.amazonaws.com",
    user: "aurora",
    password: "keyedinaurora",
    database : 'keyedin_db'
});

con.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected!");
        //con.end();
    }

});

module.exports = con;