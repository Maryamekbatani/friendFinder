// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});