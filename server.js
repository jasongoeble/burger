//dependencies
var express = require('express');
var bodyParser = require('body-parser');

//create a variable for the express server
var app = express();

//define the port on which to listen
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});