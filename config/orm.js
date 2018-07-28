//dependencies
var dbConnection = require("./connection");


var orm = 
{
    selectAll: function(tableInput) 
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, newRow) 
    {
        var queryString = "INSERT INTO ?? SET ??";
        console.log(queryString);
        connection.query(queryString, [tableInput, newRow], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colValue, newStatus, itemName, itemValue) 
    {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        console.log(queryString);
        connection.query(queryString,[tableInput, colValue, newStatus, itemName, itemValue], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    }
};
  
  module.exports = orm;