//dependencies
var orm = require("../config/orm.js");

//burger object of functions, defined in the orm.js file
var burger = 
{
    all: function(cb) 
    {
        orm.all("burgers", function(res) 
        {
            cb(res);
        });
    },
    create: function(cols, vals, cb) 
    {
        orm.create("burgers", cols, vals, function(res) 
        {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) 
        {
            cb(res);
        });
    }
};

// export the database functions
module.exports = burger;
