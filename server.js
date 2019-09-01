const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

//serves static files
app.use(express.static(__dirname + "/public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//requiring models for creating a table and syncing
const db = require("./models");

//import routes and give the server access to them
require("./routes/api-routes")(app);




//run the database before server listens!
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
  });
});

