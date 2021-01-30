// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var http = require('http').createServer(app);
var categorySeeder = require('../seeds/CategoryTableSeeder');

// Default launch URL
app.use('/', function(req, res) {
    res.status(200).send('KeyedIn API Server is Running');
});

//categorySeeder.run();

// Starting API Server
var server = http.listen(port, function() {
 console.log('KeyedIn API Server listening on port ' + port);
});
