const mysql = require('mysql');

var db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: 'localhost',
    user: 'active',
    password: 'password',
    database: 'burgers_db'
  })
}

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'active',
//   password: 'password',
//   database: 'burgers_db'
// })

db.connect(function(err) {
  if (err) throw err;
})

module.exports = db;