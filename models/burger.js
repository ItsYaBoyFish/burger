const orm = require('../config/orm.js');

const Burger = {
  // This uses the orm to show all available burgers
  all: function(callback) {
    orm.selectAll('burgers', function(results) {
      console.table(results);
      callback(results);
    })
  }, // end of all function

  create: function(callback, userValue) {
    orm.insertOne('burgers', userValue, function(results) {
      console.table(results);
      callback(results)
    });
  }, // end of create function

  update: function(callback) {
    orm.updateOne('burgers', itemIdGiven, function(results) {
      console.table(results);
      callback(results)
    }) 
  } // end of update function


} // end of Burger object

module.exports = Burger;