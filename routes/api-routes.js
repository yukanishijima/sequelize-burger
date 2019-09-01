const db = require("../models");

// routes
module.exports = function (app) {

  // get all burgers from the db to display to the page
  app.get("/", function (req, res) {
    db.Burger.findAll({
      //to get result in JSON. If this is not used, result will be object 
      raw: true
    }).then(function (result) {
      const hbsObject = {
        burgers: result
        // burgers: JSON.parse(JSON.stringify(result))    //to convert result into JSON without using raw: true 
      };

      //test
      // console.log(result);   //return object
      // console.log(JSON.stringify(result));     //returns string
      // console.log(JSON.parse(JSON.stringify(result)));    //returns object

      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


  // post a new burger
  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    })
      .then(function (result) {
        // console.log(result);
        res.json(result);
      });
  });


  // update devoured false to true (when devour btn is clicked)
  app.put("/api/burgers/devoured/:id", function (req, res) {

    db.Burger.update({
      devoured: req.body.devoured
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        if (result.changedRows === 0) {
          //if no rows were changed, the ID must not exist so 404
          return res.status(404).end();
        }
        // console.log(`changeRows: ${result.changedRows}`);
        res.status(202).end();
      });
  });


  //delete devoured burger (when delete btn is clicked)
  app.delete("/api/burgers/delete/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (result) {
        if (result.changedRows === 0) {
          //if no rows were changed, the ID must not exist so 404
          return res.status(404).end();
        }
        // console.log(`changeRows: ${result.changedRows}`);
        res.status(202).end();
      });
  });


};