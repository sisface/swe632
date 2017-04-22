// server.js

// BASE SETUP

// Call necessary packages.
var express    = require('express');        // Call express.
var app        = express();                 // Define app using express.
var bodyParser = require('body-parser');
var path = require('path');                 // Needed to serve static content.

// Configure app to use bodyParser() to get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // Set port.

// ROUTES FOR OUR API
var router = express.Router();              // Get an instance of the express Router.


// REGISTER ROUTES
// All routes are prefixed with /api.
app.use('/', router);

// START THE SERVER
app.listen(port);
console.log('Sever started. Port: ' + port);


// MONGODB

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/production'); // Connect to database.


// DATA MODELS

var airportSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    elevation: Number,
    country: String,
    location: String,
    code: String
});

var Airport = mongoose.model('airports', airportSchema);

var userSchema = new mongoose.Schema({
    fname: String,
    lname: String,    
    seatno: String
});

var User = mongoose.model('users', userSchema);

// REST API REQUESTS
// Functions to handle REST API requests.

function allAirports(req, res) {
    Airport.find(
        function(err, docs) {
            if (err) return next(err);
            res.send(docs);
        });
}

function airportById(req, res) {
    Airport.findById(req.params.id,
        function (err, docs) {
            if (err) return next(err);
            res.send(docs);
        });
}

function allUsers(req, res) {
    User.find(
        function(err, docs) {
            if (err) return next(err);
            res.send(docs);
        });
}

function userById(req, res) {
    User.findById(req.params.id,
        function (err, docs) {
            if (err) return next(err);
            res.send(docs);
        });
}

//ROUTE DEFINITIONS

// Serve up main site page.
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('.'));

// Test route to make sure everything is working (accessed at GET
// http://localhost:8080/api).
router.get('/api/test', function(req, res) {
    res.json({ message: 'Test.' });
});

// Endpoint to get all airports.
router.get('/api/airport', allAirports);

// Endpoint to get one airport, by _id.
router.get('/api/airport/:id', airportById);

// Endpoint to get all users.
router.get('/api/user', allUsers);

// Endpoint to get one user, by _id.
router.get('/api/user/:id', userById);
