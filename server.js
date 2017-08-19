var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates express server and sets up a port
var app = express(); 
var PORT = process.env.PORT || 3000;
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));

//Router
require('./application/routing/api-routes.js')(app); 
require('./application/routing/html-routes.js')(app);

//Listening to the port that was set up
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
