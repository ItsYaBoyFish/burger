const orm = require('../config/orm.js');

const Burger = {
  // This uses the orm to show all available burgers
  all: function(callback) {
    orm.selectAll('burgers', function(results) {
      console.table(results);
      callback(results);
    })
  }, // end of all function

  create: function(userValue, callback) {
    orm.insertOne('burgers', userValue, function(results) {
      console.table(results);
      callback(results)
    });
  }, // end of create function

  update: function(idGiven, callback) {
    orm.updateOne('burgers', idGiven, function(results) {
      console.table(results);
      callback(results)
    }) 
  } // end of update function


} // end of Burger object

module.exports = Burger;