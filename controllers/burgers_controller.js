//dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// GET route for displaying all burgers in db
router.get("/", function(req, res) 
{
    //for all burgers
    burger.all(function(data) 
    {
        //define a handlebar object for every burger
        var hbsObject = 
        {
            //each burger will have some data associate with it, consisting of a property and value
            burger: data
        };

        //render the handlebar object to the browser using the index.handlebars file
        res.render("index", hbsObject);
  });

});

//POST router to push new burger values into the database
router.post("/api/burger", function(req, res) 
{
    //definee the new burger with a name and devoured status
    burger.create(["burger_name","devoured"],[req.body.burger_name,req.body.devoured], function(result) 
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

    //update the burger with the defined ID as having been devoured using a field with a value pulled from the PUT data
    //and the ID hgeld in the conditionalValue variable
    burger.update(
    {
        devoured: 1
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