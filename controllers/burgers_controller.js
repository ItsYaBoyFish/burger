const express = require('express');
const Burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
  Burger.all(function(data) {
    let eaten = [];
    let notEaten = [];
    // Looping through and depicting which burgers have been eaten and which ones have not.
    for (var i = 0; i < data.length; i++) {
      if (data[i].devoured === 0) {
        notEaten.push(data[i]);
      } else {
        eaten.push(data[i])
      }
    }
    // console.log(eaten);
    // console.log('============');
    // console.log(notEaten);
    var handleBarsObject = {
      eaten: eaten,
      notEaten: notEaten
    }
    // console.log(handleBarsObject);
    res.render('index', handleBarsObject);
  })
})

router.put('/api/update/:id', function(req, res) {
  var id = req.params.id;
  Burger.update(id, function(results) {
    console.log(id);
    console.log(results);
  })
  res.redirect(303, '/');
})

router.post('/api/post', function(req, res) {
  var burgerName = req.body;
  console.log(burgerName.name);
  Burger.create(burgerName.name, function(results) {
    console.log(results);
  })
  res.status(303, res.redirect('/'));
  res.end();
})


module.exports = router;