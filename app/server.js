// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var http = require('http').createServer(app);

// Default launch URL
app.use('/', function(req, res) {
    res.status(200).send('KeyedIn API Server is Running');
});

// Starting API Server
var server = http.listen(port, function() {
 console.log('KeyedIn API Server listening on port ' + port);
});
