// server.js

// BASE SETUP

// Call necessary packages.
var express    = require('express');        // Call express.
var app        = express();                 // Define app using express.
var bodyParser = require('body-parser');

// Configure app to use bodyParser() to get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // Set port.

// ROUTES FOR OUR API
var router = express.Router();              // Get an instance of the express Router.


// REGISTER ROUTES
// All routes are prefixed with /api.
app.use('/api', router);

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

//ROUTE DEFINITIONS

// Test route to make sure everything is working (accessed at GET
// http://localhost:8080/api).
router.get('/test', function(req, res) {
    res.json({ message: 'Test.' });
});

// Endpoint to get all airports.
router.get('/airport', allAirports);

// Endpoint to get one airport, by _id.
router.get('/airport/:id', airportById);
