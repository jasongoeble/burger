//dependencies for this file
var mysql = require("mysql");

//this initiates the connection to the database
var connection = mysql.createConnection({
    //hosted locally
    host: "localhost",
    //standard local host port
    port: 3306,
    //username for my local db
    user: "root",
    //password for my local db
    password: "temp",
        //specific db to use
        database: "burgers_db",
        insecureAuth: true
});


// Make connection.
connection.connect(function(err) 
{
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
  
module.exports = connection;
