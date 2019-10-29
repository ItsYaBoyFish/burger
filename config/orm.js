const db = require('./connection.js');

const orm = {
  selectAll: function(tableName, callback) {
    db.query(`select * from ${tableName}`, function(err, results) {
      if (err) throw err;
      // console.table(results);
      callback(results);
    })
  }, // End of selectAll
  insertOne: function(tableName, usersValue, callback) {
    db.query(`insert into ${tableName} (burger_name) values ('${usersValue}')`, function(err, results) {
      if (err) throw err;
      callback(results);
    })
  }, // End of insertOne
  updateOne: function(tableName, id, callback) {
    db.query(`update ${tableName} set devoured = true where id = ${id}`, function(err, results) {
      if (err) throw err;
      callback(results);
    })
  } // End of updateOne
};


module.exports = orm;