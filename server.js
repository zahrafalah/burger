// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require("path");
var exphbs = require('express-handlebars');


// Express App
var app = express();
var port = process.env.PORT || 8080;

// static content
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


// Set Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




