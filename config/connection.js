const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'active',
  password: 'password',
  database: 'burgers_db'
})

db.connect(function(err) {
  if (err) throw err;
})

module.exports = db;