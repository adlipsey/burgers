//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require("./config/orm.js");

//Initiate app
var app = express();
var port = process.env.PORT || 3000;

//Set up app
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//Set app listener
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});