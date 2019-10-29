const db = require('./connection.js');

const orm = {
  selectAll: function(tableName) {
    db.query(`select * from ${tableName}`, function(err, results) {
      if (err) throw err;
      console.table(results);
    })
  }, // End of selectAll
  insertOne: function(tableName, usersValue) {
    db.query(`insert into ${tableName} (burger_name) values ('${usersValue}')`, function(err, results) {
      if (err) throw err;
      console.table(results);
    })
  }, // End of insertOne
  updateOne: function(tableName, id) {
    db.query(`update ${tableName} set devoured = true where id = ${id}`, function(err, results) {
      if (err) throw err;
      console.table(results);
    })
  } // End of updateOne
};


module.exports = orm;