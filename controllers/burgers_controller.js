//dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// GET route for displaying all burgers in db
router.get("/", function(req, res) 
{
    var hbsObject = {};

    //for all burgers
    burger.all(function(data) 
    {
        //define a handlebar object for every burger
        hbsObject = 
        {
            //each burger will have some data associate with it, consisting of a property and value
            burger: data
        };
    //using console log to view the data that is being captured for handlebar rendering
    console.log(hbsObject);

  });

      //render the handlebar object to the browser using the index.handlebars file
      res.render("index", hbsObject);

});

//POST router to push new burger values into the database
router.post("/api/burger", function(req, res) 
{
    //definee the new burger with a name and devoured status
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) 
    {
        // Send back the ID of the new burger value added to the database
        res.json({ id: result.insertId });
    });
});

//PUT router to update the condition of a burger in the database based on its ID
router.put("/api/burger/:id", function(req, res) 
{   
    //set a bariable equal to the burger to be updated
    var conditionalValue = "id = " + req.params.id;

    //console log the id value that was selected
    console.log("condition", conditionalValue);

    //update the burger with the defined ID as having been devoured using a field with a value pulled from the PUT data
    //and the ID hgeld in the conditionalValue variable
    burger.update(
    {
        devoured: req.body.devoured
    },
    conditionalValue,
    function(result) 
    {
        //if no rows have been updated
        if (result.changedRows === 0) 
        {
            return res.status(404).end();
        }

        //otherwise return
        res.status(200).end();

    }
    );
});

module.exports = router;