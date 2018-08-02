//dependencies
var connection = require("../config/connection.js");

//define the object relational mapper
var orm = 
{
    //select all query - all values from the specified table (tableInput)
    all: function(tableInput) 
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    //insert query - insert a rows worth of data (newRow) into the specified table (tableInput)
    create: function(tableInput, newRow) 
    {
        var queryString = "INSERT INTO ?? SET ??";
        console.log(queryString);
        connection.query(queryString, [tableInput, newRow], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    //update query - update the value of fields in a specified column (colName) to a new value (newValue) in the specified table (tableInput) 
    //only where a specific column value (targetCol) is equal to the desired condition (targetValue)
    update: function(tableInput, colName, newValue, targetCol, targetValue) 
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString,[tableInput, colName, newValue, targetCol, targetValue], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    }
};
  
  module.exports = orm;